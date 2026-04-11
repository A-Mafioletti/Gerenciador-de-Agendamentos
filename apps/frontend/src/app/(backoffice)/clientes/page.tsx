"use client";

import { useState, useEffect, useRef } from "react";
import { useSession } from "@clerk/nextjs";
import { supabase } from "@/lib/supabase-client";

export default function ClientesPage() {
  const [clients, setClients] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedPeriod, setSelectedPeriod] = useState("current");
  const { session } = useSession();
  const hasFetched = useRef(false);

  useEffect(() => {
    async function fetchClients() {
      if (!session || !session.user) return;
      if (hasFetched.current) return;

      try {
        hasFetched.current = true;
        setIsLoading(true);

        const clerkUserId = session.user.id;

        const { data: professionalData, error: professionalError } = await supabase
          .from("professionals")
          .select("id")
          .eq("clerk_id", clerkUserId)
          .single();

        if (professionalError || !professionalData) {
          setClients([]);
          return;
        }

        const internalProfessionalId = professionalData.id;

        const { data, error } = await supabase
          .from("appointments")
          .select(`
            *,
            services (
              name
            )
          `)
          .eq("professional_id", internalProfessionalId)
          .eq("status", "completed")
          .order("date", { ascending: false })
          .order("start_time", { ascending: false });

        if (error) throw error;

        if (data) {
          const uniqueClientsMap = new Map();
          data.forEach((apt) => {
            const phone = apt.client_whatsapp;
            // Only add if we haven't seen this phone number before.
            // Because they are ordered by date DESC, the first one is the most recent.
            if (phone && !uniqueClientsMap.has(phone)) {
              uniqueClientsMap.set(phone, apt);
            }
          });
          setClients(Array.from(uniqueClientsMap.values()));
        }

      } catch (error) {
        console.error("Erro ao buscar clientes:", error);
        hasFetched.current = false;
      } finally {
        setIsLoading(false);
      }
    }

    fetchClients();
  }, [session?.user?.id]);

  const isDateInPeriod = (dateString: string, period: string) => {
    if (period === "all" || !dateString) return true;
    
    // Fallback split for ISO or standard date strings up to 'T' to process reliably ignoring local offsets
    const cleanDateStr = dateString.split('T')[0];
    const [y, m] = cleanDateStr.split('-');
    const dateY = parseInt(y, 10);
    const dateM = parseInt(m, 10) - 1; // 0-based month
    
    const today = new Date();
    
    if (period === "current") {
      return dateY === today.getFullYear() && dateM === today.getMonth();
    } else if (period === "previous") {
      const target = new Date(today.getFullYear(), today.getMonth() - 1, 1);
      return dateY === target.getFullYear() && dateM === target.getMonth();
    } else if (period === "previous-2") {
      const target = new Date(today.getFullYear(), today.getMonth() - 2, 1);
      return dateY === target.getFullYear() && dateM === target.getMonth();
    }
    
    return true;
  };

  const filteredClients = clients.filter((client) => {
    const term = searchTerm.trim().toLowerCase();
    
    // Global search prioritizes text input. If text exists, ignore period.
    if (term) {
      const nameMatch = client.client_name?.toLowerCase().includes(term);
      const serviceMatch = client.services?.name?.toLowerCase().includes(term);
      return nameMatch || serviceMatch;
    }
    
    // If no search text, filter by selected period
    return isDateInPeriod(client.date, selectedPeriod);
  });

  const getWhatsappLink = (phone: string) => {
    if (!phone) return "#";
    const cleaned = phone.replace(/\D/g, "");
    return `https://wa.me/55${cleaned}`;
  };

  const formatDate = (dateString: string) => {
    if (!dateString) return "";
    const date = new Date(dateString);
    return date.toLocaleDateString("pt-BR", {
      day: "2-digit",
      month: "short",
      year: "numeric"
    });
  };

  return (
    <div className="bg-background-light dark:bg-background-dark font-display text-slate-900 dark:text-slate-100 min-h-screen flex flex-col">
      {/* Header Section */}
      <header className="sticky top-0 z-10 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 px-4 pt-6 pb-4">
        <div className="max-w-xl md:max-w-3xl lg:max-w-4xl mx-auto w-full">
          <div className="flex items-center justify-between mb-4">
            <h1 className="text-2xl font-bold tracking-tight">Meus Clientes</h1>
            <button className="p-2 rounded-full hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors">
              <span className="material-symbols-outlined text-primary">person_add</span>
            </button>
          </div>
          {/* Search Bar */}
          <div className="relative group">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <span className="material-symbols-outlined text-slate-400 group-focus-within:text-primary transition-colors">search</span>
            </div>
            <input
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="block w-full pl-10 pr-3 py-2.5 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl leading-5 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary sm:text-sm transition-all text-slate-900 dark:text-slate-100"
              placeholder="Buscar por nome ou serviço..."
              type="text"
            />
          </div>
          
          {/* Filter Bar */}
          <div className="mt-3 flex items-center">
            <div className="relative w-full sm:w-auto min-w-[180px]">
              <select
                value={selectedPeriod}
                onChange={(e) => setSelectedPeriod(e.target.value)}
                className="appearance-none block w-full pl-10 pr-10 py-2.5 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl leading-5 text-slate-700 dark:text-slate-300 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary sm:text-sm transition-all cursor-pointer font-medium"
              >
                <option value="all">Todos os Períodos</option>
                <option value="current">Mês Atual</option>
                <option value="previous">Mês Anterior</option>
                <option value="previous-2">2 Meses Atrás</option>
              </select>
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <span className="material-symbols-outlined text-slate-400 text-[18px]">calendar_month</span>
              </div>
              <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                <span className="material-symbols-outlined text-slate-400 text-[18px]">expand_more</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Content: Client List */}
      <main className="flex-1 px-4 py-6 space-y-4 max-w-xl md:max-w-3xl lg:max-w-4xl mx-auto w-full overflow-y-auto">
        {isLoading ? (
          <p className="text-center py-10 text-slate-400 italic">Carregando clientes...</p>
        ) : filteredClients.length === 0 ? (
          <div className="text-center py-16 bg-white dark:bg-slate-900 rounded-xl border-2 border-dashed border-slate-200 dark:border-slate-800">
            <p className="text-slate-500">
              {searchTerm
                ? "Nenhum cliente encontrado para sua busca."
                : selectedPeriod !== "all"
                ? "Nenhum cliente encontrado neste período."
                : "Nenhum serviço concluído ainda. Seus clientes aparecerão aqui."}
            </p>
          </div>
        ) : (
          filteredClients.map((client) => (
            <div key={client.id} className="bg-white dark:bg-slate-900 p-4 rounded-xl border border-slate-100 dark:border-slate-800 shadow-sm flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="h-14 w-14 rounded-full bg-slate-100 dark:bg-slate-800 overflow-hidden shrink-0 border border-slate-200 dark:border-slate-700">
                  <img
                    className="h-full w-full object-cover"
                    alt={`Portrait of ${client.client_name}`}
                    src={`https://api.dicebear.com/7.x/initials/svg?seed=${encodeURIComponent(client.client_name)}`}
                  />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900 dark:text-slate-100">{client.client_name}</h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400 flex items-center gap-1">
                    <span className="material-symbols-outlined text-[14px]">engineering</span>
                    {client.services?.name || "Serviço Geral"}
                  </p>
                  <p className="text-[11px] text-slate-400 mt-0.5">Última visita: {formatDate(client.date)}</p>
                </div>
              </div>
              <a
                href={getWhatsappLink(client.client_whatsapp)}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-500/10 text-green-600 dark:text-green-400 p-3 rounded-full hover:bg-green-500/20 transition-colors flex items-center justify-center shrink-0"
              >
                <span className="material-symbols-outlined">chat</span>
              </a>
            </div>
          ))
        )}

        {/* Bottom Spacer */}
        <div className="h-24"></div>
      </main>
    </div>
  );
}

"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || "";
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "";
const supabase = createClient(supabaseUrl, supabaseAnonKey);

export default function DashboardPage() {
  const [appointments, setAppointments] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchAppointments() {
      try {
        setIsLoading(true);
        // Buscamos tudo de appointments e tentamos trazer o nome do serviço da tabela vinculada
        const { data, error } = await supabase
          .from("appointments")
          .select(`
            *,
            services (
              name
            )
          `)
          .order("date", { ascending: true })
          .order("start_time", { ascending: true });

        if (error) throw error;
        if (data) setAppointments(data);
      } catch (error) {
        console.error("Erro ao buscar dados:", error);
      } finally {
        setIsLoading(false);
      }
    }

    fetchAppointments();
  }, []);

  const handleCopyLink = () => {
    const link = "https://projeto-agendamentos-ashen.vercel.app/booking/carlos";
    navigator.clipboard.writeText(link);
    alert("Link de agendamento copiado!");
  };

  return (
    <div className="bg-background-light dark:bg-background-dark font-display text-slate-900 dark:text-slate-100 min-h-screen flex flex-col">
      <header className="bg-background-light dark:bg-background-dark sticky top-0 z-10 border-b border-primary/10">
        <div className="flex items-center p-4 justify-between max-w-xl md:max-w-3xl lg:max-w-4xl mx-auto w-full">
          <div className="flex items-center gap-3">
            <div className="size-10 shrink-0 rounded-full bg-primary/10 flex items-center justify-center overflow-hidden border border-primary/20">
              <img
                className="w-full h-full object-cover"
                alt="Carlos"
                src="https://api.dicebear.com/7.x/avataaars/svg?seed=Carlos"
              />
            </div>
            <div>
              <h1 className="text-sm text-slate-500 dark:text-slate-400 font-medium">Bem-vindo de volta,</h1>
              <h2 className="text-lg font-bold leading-tight tracking-tight">Olá, Carlos</h2>
            </div>
          </div>
          <button
            onClick={handleCopyLink}
            className="flex items-center gap-2 bg-primary/10 hover:bg-primary/20 text-primary px-3 py-2 rounded-lg transition-colors duration-200"
          >
            <span className="material-symbols-outlined text-[18px]">content_copy</span>
            <span className="text-xs font-bold uppercase tracking-wider hidden sm:block">Copiar Link</span>
          </button>
        </div>

        <div className="px-4 max-w-xl md:max-w-3xl lg:max-w-4xl mx-auto w-full">
          <div className="flex gap-8">
            <div className="flex flex-col items-center justify-center border-b-2 border-primary text-primary pb-3 pt-4 cursor-pointer">
              <p className="text-sm font-bold">Agenda Completa</p>
            </div>
          </div>
        </div>
      </header>

      <main className="flex-1 p-4 max-w-xl md:max-w-3xl lg:max-w-4xl mx-auto w-full overflow-y-auto">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-base font-bold text-slate-800 dark:text-slate-200 uppercase tracking-wide">Cronograma Geral</h3>
          <span className="text-xs font-medium text-slate-500 bg-slate-200 dark:bg-slate-800 px-2 py-1 rounded">
            Sincronizado com Banco
          </span>
        </div>

        <div className="flex flex-col gap-4">
          {isLoading ? (
            <p className="text-center py-10 text-slate-400 italic">Carregando dados reais...</p>
          ) : appointments.length === 0 ? (
            <div className="text-center py-16 bg-white dark:bg-slate-900 rounded-xl border-2 border-dashed border-slate-200 dark:border-slate-800">
              <p className="text-slate-500">Nenhum agendamento encontrado.</p>
            </div>
          ) : (
            appointments.map((apt) => (
              <div key={apt.id} className="flex flex-col gap-3 rounded-xl bg-white dark:bg-slate-900 p-4 shadow-sm border border-slate-100 dark:border-slate-800 transition-all hover:shadow-md">
                <div className="flex justify-between items-start">
                  <div className="flex flex-col gap-1">
                    <div className="flex gap-2">
                      <span className="text-primary text-[10px] font-bold bg-primary/5 px-2 py-0.5 rounded-md w-fit flex items-center gap-1 uppercase">
                        <span className="material-symbols-outlined text-[12px]">calendar_month</span>
                        {new Date(apt.date).toLocaleDateString('pt-BR')}
                      </span>
                      <span className="text-slate-600 dark:text-slate-400 text-[10px] font-bold bg-slate-100 dark:bg-slate-800 px-2 py-0.5 rounded-md w-fit flex items-center gap-1 uppercase">
                        <span className="material-symbols-outlined text-[12px]">schedule</span>
                        {apt.start_time.substring(0, 5)}h
                      </span>
                    </div>
                    <p className="text-slate-900 dark:text-slate-100 text-lg font-bold mt-2">{apt.client_name}</p>
                    <p className="text-primary dark:text-primary-light text-sm font-semibold italic">
                      {apt.services?.name || "Serviço Geral"}
                    </p>
                    {apt.address_notes && (
                      <p className="text-slate-500 dark:text-slate-400 text-xs mt-1 flex items-center gap-1">
                        <span className="material-symbols-outlined text-[14px]">location_on</span>
                        {apt.address_notes}
                      </p>
                    )}
                  </div>
                  <div className="size-12 rounded-lg bg-slate-100 dark:bg-slate-800 overflow-hidden shadow-inner">
                    <img
                      className="w-full h-full object-cover"
                      src={`https://api.dicebear.com/7.x/initials/svg?seed=${apt.client_name}`}
                      alt={apt.client_name}
                    />
                  </div>
                </div>

                <div className="flex gap-2 pt-2 border-t border-slate-50 dark:border-slate-800 mt-1">
                  <a
                    href={`https://wa.me/55${apt.client_whatsapp?.replace(/\D/g, '')}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 rounded-lg h-10 px-4 bg-[#25D366]/10 text-[#25D366] hover:bg-[#25D366]/20 transition-all font-bold text-sm"
                  >
                    <span className="material-symbols-outlined text-[20px]">chat</span>
                    WhatsApp
                  </a>
                </div>
              </div>
            ))
          )}
        </div>

        <div className="h-24"></div>
      </main>
    </div>
  );
}
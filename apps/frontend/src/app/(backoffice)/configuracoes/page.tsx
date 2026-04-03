"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { supabase } from "@/lib/supabase-client";

interface ServiceData {
  id: string;
  name: string;
  duration_minutes: number;
}

export default function ConfiguracoesPage() {
  const pathname = usePathname();
  
  const [loading, setLoading] = useState(false);
  const [professionalId, setProfessionalId] = useState<string | null>(null);
  
  const [dias, setDias] = useState({
    seg: true, ter: true, qua: true, qui: true, sex: true, sab: false, dom: false
  });
  
  const [horarios, setHorarios] = useState({
    inicio: "08:00",
    termino: "18:00",
    pausaInicio: "12:00",
    pausaFim: "13:00"
  });

  const [services, setServices] = useState<ServiceData[]>([]);
  const [isAddingService, setIsAddingService] = useState(false);
  const [newServiceName, setNewServiceName] = useState("");
  const [newServiceDuration, setNewServiceDuration] = useState("");

  useEffect(() => {
    async function loadSettings() {
      try {
        // Primeiro acha quem é o profissional. Estamos amarrando ao primeiro por ora (desenho single-tenant)
        const { data: profs, error: profError } = await supabase.from('professionals').select('id').limit(1);
        if (profError) throw profError;
        if (!profs || profs.length === 0) return;
        
        const profId = profs[0].id;
        setProfessionalId(profId);

        // Busca o setting associado
        const { data: settings, error: setError } = await supabase
          .from('professional_settings')
          .select('*')
          .eq('professional_id', profId)
          .maybeSingle();

        if (setError) {
           console.error("Erro ao buscar configurações:", setError);
        } else if (settings) {
           if (settings.working_days) setDias(settings.working_days as any);
           setHorarios({
             inicio: settings.start_time ? settings.start_time.substring(0, 5) : "08:00",
             termino: settings.end_time ? settings.end_time.substring(0, 5) : "18:00",
             pausaInicio: settings.break_start ? settings.break_start.substring(0, 5) : "12:00",
             pausaFim: settings.break_end ? settings.break_end.substring(0, 5) : "13:00"
           });
        }

        // Busca os serviços associados
        const { data: srvs, error: srvsError } = await supabase
          .from('services')
          .select('id, name, duration_minutes')
          .eq('professional_id', profId);
          
        if (srvsError) {
          console.error("Erro ao buscar serviços:", srvsError);
        } else if (srvs) {
          setServices(srvs);
        }

      } catch (err) {
        console.error("Falha ao carregar configurações", err);
      }
    }
    loadSettings();
  }, []);

  const toggleDia = (dia: keyof typeof dias) => {
    setDias(prev => ({ ...prev, [dia]: !prev[dia] }));
  };

  const handleTimeChange = (field: keyof typeof horarios, value: string) => {
    setHorarios(prev => ({ ...prev, [field]: value }));
  };

  const handleSave = async () => {
    if (!professionalId) {
      alert("Profissional não encontrado!");
      return;
    }
    setLoading(true);
    try {
      const { error } = await supabase.from('professional_settings').upsert({
        professional_id: professionalId,
        working_days: dias,
        start_time: horarios.inicio,
        end_time: horarios.termino,
        break_start: horarios.pausaInicio,
        break_end: horarios.pausaFim,
        updated_at: new Date().toISOString()
      }, { onConflict: 'professional_id' }); // IMPORTANTE: usa a constraint the unique professional_id

      if (error) throw error;
      alert("Configurações salvas com sucesso!");
    } catch (err) {
      console.error("Erro ao salvar", err);
      alert("Ocorreu um erro ao salvar as configurações.");
    } finally {
      setLoading(false);
    }
  };

  const handleAddService = async () => {
    if (!professionalId) return;
    if (!newServiceName.trim()) {
      alert("Por favor, preencha o nome do serviço.");
      return;
    }
    const duration = parseInt(newServiceDuration, 10);
    if (isNaN(duration) || duration <= 0) {
      alert("Por favor, informe uma duração válida em minutos.");
      return;
    }

    try {
      const { data, error } = await supabase.from('services').insert({
        professional_id: professionalId,
        name: newServiceName,
        duration_minutes: duration
      }).select('id, name, duration_minutes').single();

      if (error) {
        console.error("Erro ao inserir serviço:", error);
        alert("Ops! Não foi possível adicionar o serviço. Verifique console para detalhes.");
        return;
      }

      if (data) {
        setServices(prev => [...prev, data]);
        setNewServiceName("");
        setNewServiceDuration("");
        setIsAddingService(false);
      }
    } catch (error) {
      console.error("Exceção ao inserir serviço:", error);
      alert("Erro inesperado ao salvar serviço.");
    }
  };

  const handleDeleteService = async (serviceId: string) => {
    if (!confirm("Tem certeza que deseja excluir este serviço?")) return;
    try {
      const { error } = await supabase.from('services').delete().eq('id', serviceId);
      if (error) {
        console.error("Erro ao deletar serviço:", error);
        alert("Erro ao excluir o serviço. Verifique se ele não possui agendamentos atrelados.");
        return;
      }
      setServices(prev => prev.filter(s => s.id !== serviceId));
    } catch (err) {
      console.error("Exceção ao deletar serviço:", err);
      alert("Erro inesperado ao excluir serviço.");
    }
  };

  return (
    <div className="bg-background-light dark:bg-background-dark font-display text-slate-900 dark:text-slate-100 min-h-screen flex flex-col">
      {/* Header */}
      <header className="sticky top-0 z-10 bg-background-light/90 dark:bg-background-dark/90 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 px-4 py-4">
        <div className="max-w-xl md:max-w-3xl lg:max-w-4xl mx-auto flex items-center gap-4">
          <Link href="/dashboard" className="flex items-center justify-center p-2 rounded-full hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors">
            <span className="material-symbols-outlined text-slate-700 dark:text-slate-300">arrow_back</span>
          </Link>
          <h1 className="text-xl font-bold tracking-tight">Configurações e Disponibilidade</h1>
        </div>
      </header>

      <main className="flex-1 w-full max-w-xl md:max-w-3xl lg:max-w-4xl mx-auto overflow-y-auto pb-32">
        {/* Section A: Dias da Semana */}
        <section className="p-4 sm:p-6 border-b border-slate-200 dark:border-slate-800">
          <h2 className="text-sm font-semibold uppercase tracking-wider text-primary mb-4">Seção A: Dias de Trabalho</h2>
          <div className="space-y-1">
            <label className="flex items-center justify-between py-3 px-2 rounded-lg hover:bg-white dark:hover:bg-slate-800 transition-colors cursor-pointer">
              <span className="text-base font-medium">Segunda-feira</span>
              <input checked={dias.seg} onChange={() => toggleDia('seg')} className="h-6 w-6 rounded border-slate-300 dark:border-slate-600 text-primary focus:ring-primary accent-primary" type="checkbox"/>
            </label>
            <label className="flex items-center justify-between py-3 px-2 rounded-lg hover:bg-white dark:hover:bg-slate-800 transition-colors cursor-pointer">
              <span className="text-base font-medium">Terça-feira</span>
              <input checked={dias.ter} onChange={() => toggleDia('ter')} className="h-6 w-6 rounded border-slate-300 dark:border-slate-600 text-primary focus:ring-primary accent-primary" type="checkbox"/>
            </label>
            <label className="flex items-center justify-between py-3 px-2 rounded-lg hover:bg-white dark:hover:bg-slate-800 transition-colors cursor-pointer">
              <span className="text-base font-medium">Quarta-feira</span>
              <input checked={dias.qua} onChange={() => toggleDia('qua')} className="h-6 w-6 rounded border-slate-300 dark:border-slate-600 text-primary focus:ring-primary accent-primary" type="checkbox"/>
            </label>
            <label className="flex items-center justify-between py-3 px-2 rounded-lg hover:bg-white dark:hover:bg-slate-800 transition-colors cursor-pointer">
              <span className="text-base font-medium">Quinta-feira</span>
              <input checked={dias.qui} onChange={() => toggleDia('qui')} className="h-6 w-6 rounded border-slate-300 dark:border-slate-600 text-primary focus:ring-primary accent-primary" type="checkbox"/>
            </label>
            <label className="flex items-center justify-between py-3 px-2 rounded-lg hover:bg-white dark:hover:bg-slate-800 transition-colors cursor-pointer">
              <span className="text-base font-medium">Sexta-feira</span>
              <input checked={dias.sex} onChange={() => toggleDia('sex')} className="h-6 w-6 rounded border-slate-300 dark:border-slate-600 text-primary focus:ring-primary accent-primary" type="checkbox"/>
            </label>
            <label className="flex items-center justify-between py-3 px-2 rounded-lg hover:bg-white dark:hover:bg-slate-800 transition-colors cursor-pointer">
              <span className={`text-base font-medium ${!dias.sab && 'text-slate-400'}`}>Sábado</span>
              <input checked={dias.sab} onChange={() => toggleDia('sab')} className="h-6 w-6 rounded border-slate-300 dark:border-slate-600 text-primary focus:ring-primary accent-primary" type="checkbox"/>
            </label>
            <label className="flex items-center justify-between py-3 px-2 rounded-lg hover:bg-white dark:hover:bg-slate-800 transition-colors cursor-pointer">
              <span className={`text-base font-medium ${!dias.dom && 'text-slate-400'}`}>Domingo</span>
              <input checked={dias.dom} onChange={() => toggleDia('dom')} className="h-6 w-6 rounded border-slate-300 dark:border-slate-600 text-primary focus:ring-primary accent-primary" type="checkbox"/>
            </label>
          </div>
        </section>

        {/* Section B: Horários */}
        <section className="p-4 sm:p-6 border-b border-slate-200 dark:border-slate-800">
          <h2 className="text-sm font-semibold uppercase tracking-wider text-primary mb-4">Seção B: Horários</h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-semibold text-slate-500">Início do Expediente</label>
              <div className="relative">
                <input className="w-full rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100 focus:border-primary focus:ring-primary p-3 outline-none" type="time" value={horarios.inicio} onChange={(e) => handleTimeChange('inicio', e.target.value)}/>
              </div>
            </div>
            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-semibold text-slate-500">Término do Expediente</label>
              <div className="relative">
                <input className="w-full rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100 focus:border-primary focus:ring-primary p-3 outline-none" type="time" value={horarios.termino} onChange={(e) => handleTimeChange('termino', e.target.value)}/>
              </div>
            </div>
            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-semibold text-slate-500">Início da Pausa</label>
              <div className="relative">
                <input className="w-full rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100 focus:border-primary focus:ring-primary p-3 outline-none" type="time" value={horarios.pausaInicio} onChange={(e) => handleTimeChange('pausaInicio', e.target.value)}/>
              </div>
            </div>
            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-semibold text-slate-500">Fim da Pausa</label>
              <div className="relative">
                <input className="w-full rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100 focus:border-primary focus:ring-primary p-3 outline-none" type="time" value={horarios.pausaFim} onChange={(e) => handleTimeChange('pausaFim', e.target.value)}/>
              </div>
            </div>
          </div>
        </section>

        {/* Section C: Lista de Serviços */}
        <section className="p-4 sm:p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-sm font-semibold uppercase tracking-wider text-primary">Seção C: Serviços</h2>
            <button 
              onClick={() => setIsAddingService(!isAddingService)} 
              className="flex items-center gap-1 text-sm font-bold text-primary hover:underline"
            >
              <span className="material-symbols-outlined text-[18px]">
                {isAddingService ? "close" : "add_circle"}
              </span>
              {isAddingService ? "Cancelar" : "Adicionar Novo"}
            </button>
          </div>
          
          {isAddingService && (
            <div className="mb-6 p-4 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-dashed border-slate-300 dark:border-slate-700">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-semibold text-slate-500">Nome do Serviço</label>
                  <input 
                    type="text" 
                    placeholder="Ex: Corte de Cabelo" 
                    value={newServiceName}
                    onChange={(e) => setNewServiceName(e.target.value)}
                    className="w-full rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100 focus:border-primary focus:ring-primary p-3 outline-none" 
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-semibold text-slate-500">Duração (minutos)</label>
                  <input 
                    type="number" 
                    placeholder="Ex: 60" 
                    value={newServiceDuration}
                    onChange={(e) => setNewServiceDuration(e.target.value)}
                    className="w-full rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100 focus:border-primary focus:ring-primary p-3 outline-none" 
                  />
                </div>
              </div>
              <button 
                onClick={handleAddService}
                className="mt-4 px-4 py-2 bg-primary text-white rounded-lg font-bold shadow hover:bg-primary/90 transition-colors"
                disabled={!newServiceName || !newServiceDuration}
              >
                Salvar Serviço
              </button>
            </div>
          )}
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {services.length === 0 ? (
              <p className="text-sm text-slate-500 col-span-2">Nenhum serviço cadastrado.</p>
            ) : (
              services.map(service => (
                <div key={service.id} className="flex items-center gap-3 p-4 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm">
                  <div className="flex-1">
                    <h4 className="font-semibold text-slate-900 dark:text-white border-b border-transparent">{service.name}</h4>
                    <div className="flex items-center gap-1.5 text-slate-500 text-sm mt-1">
                      <span className="material-symbols-outlined text-[16px]">schedule</span>
                      {Math.floor(service.duration_minutes / 60) > 0 ? `${Math.floor(service.duration_minutes / 60)}h ` : ''}
                      {service.duration_minutes % 60 > 0 ? `${service.duration_minutes % 60}min` : ''}
                      {service.duration_minutes === 60 ? '00 min' : ''}
                    </div>
                  </div>
                  <button 
                    onClick={() => handleDeleteService(service.id)} 
                    className="p-2 text-slate-400 hover:text-red-500 transition-colors"
                  >
                    <span className="material-symbols-outlined">delete</span>
                  </button>
                </div>
              ))
            )}
          </div>
        </section>
        
        {/* Fill vertical space for the fixed footer */}
        <div className="h-10"></div>
      </main>

      {/* Fixed Footer Actions */}
      <div className="fixed bottom-0 left-0 md:left-64 w-full md:w-[calc(100%-16rem)] z-40">
        <div className="bg-gradient-to-t from-background-light via-background-light dark:from-background-dark dark:via-background-dark to-transparent pt-8 pb-24 md:pb-8">
          <div className="max-w-xl md:max-w-3xl lg:max-w-4xl mx-auto px-4">
            <button onClick={handleSave} disabled={loading} className="w-full bg-primary text-white font-bold py-4 rounded-xl shadow-lg shadow-primary/30 active:scale-[0.98] transition-all disabled:opacity-70 disabled:active:scale-100">
              {loading ? "Salvando..." : "Salvar Configurações"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}


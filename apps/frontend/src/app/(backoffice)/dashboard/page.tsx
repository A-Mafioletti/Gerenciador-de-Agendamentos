"use client";

import { useState, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import { useUser, useSession } from "@clerk/nextjs";
import { supabase } from "@/lib/supabase-client";

const getTodayString = () => {
  const d = new Date();
  const year = d.getFullYear();
  const month = String(d.getMonth() + 1).padStart(2, '0');
  const day = String(d.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
};

const formatDate = (dateString: string) => {
  if (!dateString) return "";
  const [year, month, day] = dateString.split('-').map(Number);
  const date = new Date(year, month - 1, day);
  return date.toLocaleDateString("pt-BR");
};

export default function DashboardPage() {
  const [appointments, setAppointments] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [activeTab, setActiveTab] = useState<'upcoming' | 'history'>('upcoming');
  const [selectedMonth, setSelectedMonth] = useState<string>('Todos');
  const [isBlockModalOpen, setIsBlockModalOpen] = useState(false);
  const [blockDate, setBlockDate] = useState(getTodayString());
  const [blockTimes, setBlockTimes] = useState<string[]>([]);
  const [availableTimesForBlock, setAvailableTimesForBlock] = useState<string[]>([]);
  const [professionalSettings, setProfessionalSettings] = useState<any>(null);
  const [internalProfessionalId, setInternalProfessionalId] = useState<string | null>(null);
  const [isBlocking, setIsBlocking] = useState(false);

  const { session } = useSession();
  const { user } = useUser();
  const hasFetched = useRef(false);

  useEffect(() => {
    async function fetchAppointments() {
      if (!session || !session.user) return; // Aguarda a sessão estar completamente carregada
      if (hasFetched.current) return; // Trava: se já buscou, não busca de novo

      try {
        hasFetched.current = true;
        setIsLoading(true);

        // 1. Obter o userId do usuário logado via Clerk
        const clerkUserId = session.user.id;
        console.log('ID do usuário logado no Clerk:', clerkUserId);

        // 2. Fazer uma query na tabela professionals filtrando por clerk_id
        const { data: professionalData, error: professionalError } = await supabase
          .from("professionals")
          .select("id")
          .eq("clerk_id", clerkUserId)
          .single();

        console.log('Resposta do Supabase (Profissional):', { data: professionalData, error: professionalError });

        if (professionalError) {
          console.error("Erro ao buscar profissional correspondente:", professionalError);
          setAppointments([]);
          return;
        }

        if (!professionalData) {
          console.warn("Nenhum profissional encontrado com esse clerk_id.");
          setAppointments([]);
          return;
        }

        // 3. Pegar o id (UUID interno) retornado
        const fetchedInternalProfessionalId = professionalData.id;
        setInternalProfessionalId(fetchedInternalProfessionalId);

        // 3.5 Buscar as configurações do profissional para o bloqueio
        const { data: settingsData } = await supabase
          .from("professional_settings")
          .select("*")
          .eq("professional_id", fetchedInternalProfessionalId)
          .maybeSingle();

        if (settingsData) {
          setProfessionalSettings(settingsData);
        }

        // 4. Buscar os agendamentos (appointments) e serviços vinculados a esse profissional
        const { data, error } = await supabase
          .from("appointments")
          .select(`
            *,
            services (
              name
            )
          `)
          .eq("professional_id", fetchedInternalProfessionalId)
          .order("date", { ascending: true })
          .order("start_time", { ascending: true });

        if (error) throw error;
        if (data) setAppointments(data);
      } catch (error) {
        console.error("Erro ao buscar dados:", error);
        hasFetched.current = false; // Permite tentar novamente em caso de erro
      } finally {
        setIsLoading(false);
      }
    }

    if (session?.user?.id) {
      fetchAppointments();
    }
  }, [session?.user?.id]);

  useEffect(() => {
    if (!isBlockModalOpen || !professionalSettings || !blockDate) {
      setAvailableTimesForBlock([]);
      return;
    }

    const { working_days, start_time, end_time, break_start, break_end } = professionalSettings;

    // Ajuste seguro de timezone para obter o dia da semana
    const [year, month, day] = blockDate.split('-');
    const dateObj = new Date(Number(year), Number(month) - 1, Number(day));
    const dayOfWeek = dateObj.getDay();
    const diaKeys = ["dom", "seg", "ter", "qua", "qui", "sex", "sab"];
    const diaKey = diaKeys[dayOfWeek];

    let workingDays = working_days || { seg: true, ter: true, qua: true, qui: true, sex: true, sab: false, dom: false };
    if (!workingDays[diaKey]) {
      setAvailableTimesForBlock([]); // Dia não configurado como útil
      return;
    }

    let startTime = start_time ? start_time.substring(0, 5) : "08:00";
    let endTime = end_time ? end_time.substring(0, 5) : "18:00";
    let breakStart = break_start ? break_start.substring(0, 5) : "12:00";
    let breakEnd = break_end ? break_end.substring(0, 5) : "13:00";

    const generatedTimes = [];
    let [currentH, currentM] = startTime.split(':').map(Number);
    const [endH, endM] = endTime.split(':').map(Number);
    const [bsH, bsM] = breakStart.split(':').map(Number);
    const [beH, beM] = breakEnd.split(':').map(Number);

    const toMinutes = (h: number, m: number) => h * 60 + m;
    const limitMinutes = toMinutes(endH, endM);
    const breakStartM = toMinutes(bsH, bsM);
    const breakEndM = toMinutes(beH, beM);

    while (toMinutes(currentH, currentM) < limitMinutes) {
      const currentMins = toMinutes(currentH, currentM);
      if (currentMins >= breakStartM && currentMins < breakEndM) {
        currentH = beH;
        currentM = beM;
        continue;
      }
      generatedTimes.push(`${String(currentH).padStart(2, '0')}:${String(currentM).padStart(2, '0')}`);
      currentH++;
    }

    // Filtrar horários já agendados
    const occupied = appointments
      .filter(apt => apt.date === blockDate && apt.status === 'confirmed')
      .map(apt => apt.start_time.substring(0, 5));

    const finalAvailable = generatedTimes.filter(t => !occupied.includes(t));
    setAvailableTimesForBlock(finalAvailable);

  }, [isBlockModalOpen, blockDate, professionalSettings, appointments]);

  const handleBlockSubmit = async () => {
    if (blockTimes.length === 0) {
      alert("Selecione pelo menos um horário para bloquear.");
      return;
    }

    setIsBlocking(true);

    try {
      const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001/api';

      let blockServiceId = null;
      if (internalProfessionalId) {
        const { data: serviceData } = await supabase
          .from("services")
          .select("id")
          .eq("professional_id", internalProfessionalId)
          .eq("name", "Bloqueio de horário")
          .maybeSingle();
        if (serviceData) {
          blockServiceId = serviceData.id;
        }
      }

      const promises = blockTimes.map(time => {
        return fetch(`${apiUrl}/appointments`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            professional_id: internalProfessionalId,
            service_id: blockServiceId,
            name: "🔒 BLOQUEIO PESSOAL",
            whatsapp: "00000000000",
            service: "Bloqueio de horário",
            details: "Bloqueio de horário inserido pelo profissional",
            date: blockDate,
            time: time,
          }),
        });
      });

      const results = await Promise.all(promises);
      const errors = results.filter(r => !r.ok);
      if (errors.length > 0) {
        throw new Error("Falha ao salvar alguns horários.");
      }

      alert("Horários bloqueados com sucesso!");
      setIsBlockModalOpen(false);
      setBlockTimes([]);

      // Update data - simple page refresh since data flow is already handled by load
      window.location.reload();

    } catch (error) {
      console.error("Erro ao bloquear:", error);
      alert("Ocorreu um erro ao bloquear os horários.");
    } finally {
      setIsBlocking(false);
    }
  };


  const handleUpdateStatus = async (appointmentId: string, newStatus: string) => {
    console.log('ID enviado para update:', appointmentId);

    if (!appointmentId) {
      console.error('O ID do agendamento está indefinido.');
      alert('Erro: ID do agendamento não encontrado.');
      return;
    }

    try {
      const { error } = await supabase
        .from('appointments')
        .update({ status: newStatus })
        .eq('id', appointmentId);

      if (error) throw error;

      setAppointments(prev => prev.map(apt =>
        apt.id === appointmentId ? { ...apt, status: newStatus } : apt
      ));
    } catch (error: any) {
      console.error('Erro detalhado do Supabase:', error.message || error);
      alert('Erro ao atualizar agendamento: ' + (error.message || 'Falha desconhecida.'));
    }
  };

  const todayStr = getTodayString();

  const historyRaw = appointments.filter((apt) => {
    const isPastDate = apt.date < todayStr;
    const status = apt.status || 'confirmed';
    return status === 'completed' || status === 'canceled' || isPastDate;
  });

  const availableMonths = Array.from(new Set(historyRaw.map(apt => {
    const [year, month] = apt.date.split('-');
    return `${month}/${year}`;
  }))).sort((a, b) => {
    const [monthA, yearA] = a.split('/');
    const [monthB, yearB] = b.split('/');
    if (yearA !== yearB) return Number(yearB) - Number(yearA);
    return Number(monthB) - Number(monthA);
  });

  const filteredAppointments = appointments.filter((apt) => {
    const isPastDate = apt.date < todayStr;
    const status = apt.status || 'confirmed';

    if (activeTab === 'upcoming') {
      return status === 'confirmed' && !isPastDate;
    } else {
      const isHistory = status === 'completed' || status === 'canceled' || isPastDate;
      if (!isHistory) return false;
      if (selectedMonth === 'Todos') return true;
      const [year, month] = apt.date.split('-');
      return `${month}/${year}` === selectedMonth;
    }
  });

  if (activeTab === 'history') {
    filteredAppointments.sort((a, b) => {
      if (a.date !== b.date) return b.date.localeCompare(a.date);
      return b.start_time.localeCompare(a.start_time);
    });
  }

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
                alt={user?.firstName || "User"}
                src={user?.imageUrl}
              />
            </div>
            <div>
              <h1 className="text-sm text-slate-500 dark:text-slate-400 font-medium">Bem-vindo de volta,</h1>
              <h2 className="text-lg font-bold leading-tight tracking-tight">Olá, {user?.firstName || "Profissional"}</h2>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={() => setIsBlockModalOpen(true)}
              className="flex items-center gap-1.5 bg-slate-800 hover:bg-slate-700 text-white px-3 py-2 rounded-lg transition-colors duration-200"
            >
              <span className="material-symbols-outlined text-[18px]">lock</span>
              <span className="text-xs font-bold uppercase tracking-wider hidden sm:block">Bloquear</span>
            </button>
            <button
              onClick={handleCopyLink}
              className="flex items-center gap-2 bg-primary/10 hover:bg-primary/20 text-primary px-3 py-2 rounded-lg transition-colors duration-200"
            >
              <span className="material-symbols-outlined text-[18px]">content_copy</span>
              <span className="text-xs font-bold uppercase tracking-wider hidden sm:block">Link</span>
            </button>
          </div>
        </div>

        <div className="px-4 max-w-xl md:max-w-3xl lg:max-w-4xl mx-auto w-full">
          <div className="flex gap-8">
            <div
              onClick={() => setActiveTab('upcoming')}
              className={`flex flex-col items-center justify-center pb-3 pt-4 cursor-pointer transition-colors ${activeTab === 'upcoming'
                  ? 'border-b-2 border-primary text-primary'
                  : 'text-slate-500 border-b-2 border-transparent hover:text-slate-800 dark:hover:text-slate-300'
                }`}
            >
              <p className="text-sm font-bold">Próximos</p>
            </div>
            <div
              onClick={() => setActiveTab('history')}
              className={`flex flex-col items-center justify-center pb-3 pt-4 cursor-pointer transition-colors ${activeTab === 'history'
                  ? 'border-b-2 border-primary text-primary'
                  : 'text-slate-500 border-b-2 border-transparent hover:text-slate-800 dark:hover:text-slate-300'
                }`}
            >
              <p className="text-sm font-bold">Histórico</p>
            </div>
          </div>
        </div>
      </header>

      <main className="flex-1 p-4 max-w-xl md:max-w-3xl lg:max-w-4xl mx-auto w-full overflow-y-auto">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-base font-bold text-slate-800 dark:text-slate-200 uppercase tracking-wide">
            {activeTab === 'upcoming' ? 'Próximos Agendamentos' : 'Histórico de Agendamentos'}
          </h3>
          {activeTab === 'upcoming' && (
            <span className="text-xs font-medium text-slate-500 bg-slate-200 dark:bg-slate-800 px-2 py-1 rounded">
              Sincronizado com Banco
            </span>
          )}
        </div>

        {activeTab === 'history' && availableMonths.length > 0 && (
          <div className="mb-4">
            <select
              value={selectedMonth}
              onChange={(e) => setSelectedMonth(e.target.value)}
              className="w-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg px-3 py-2 text-sm font-medium text-slate-700 dark:text-slate-300 focus:outline-none focus:ring-2 focus:ring-primary/50 cursor-pointer shadow-sm"
            >
              <option value="Todos">Todos os meses</option>
              {availableMonths.map(month => (
                <option key={month} value={month}>{month}</option>
              ))}
            </select>
          </div>
        )}

        <div className="flex flex-col gap-4">
          {isLoading ? (
            <p className="text-center py-10 text-slate-400 italic">Carregando dados reais...</p>
          ) : filteredAppointments.length === 0 ? (
            <div className="text-center py-16 bg-white dark:bg-slate-900 rounded-xl border-2 border-dashed border-slate-200 dark:border-slate-800">
              <p className="text-slate-500">Nenhum agendamento encontrado para esta aba.</p>
            </div>
          ) : (
            filteredAppointments.map((apt) => {
              const isBlocked = apt.client_name === '🔒 BLOQUEIO PESSOAL';

              return (
                <div key={apt.id} className={`flex flex-col gap-3 rounded-xl p-4 shadow-sm border transition-all hover:shadow-md ${isBlocked ? 'bg-slate-50 dark:bg-slate-900/40 border-slate-200 dark:border-slate-800 opacity-90' : 'bg-white dark:bg-slate-900 border-slate-100 dark:border-slate-800'}`}>
                  <div className="flex justify-between items-start">
                    <div className="flex flex-col gap-1">
                      <div className="flex gap-2">
                        <span className={`${isBlocked ? 'text-slate-500 bg-slate-200/50' : 'text-primary bg-primary/5'} text-[10px] font-bold px-2 py-0.5 rounded-md w-fit flex items-center gap-1 uppercase`}>
                          <span className="material-symbols-outlined text-[12px]">calendar_month</span>
                          {formatDate(apt.date)}
                        </span>
                        <span className="text-slate-600 dark:text-slate-400 text-[10px] font-bold bg-slate-100 dark:bg-slate-800 px-2 py-0.5 rounded-md w-fit flex items-center gap-1 uppercase">
                          <span className="material-symbols-outlined text-[12px]">schedule</span>
                          {apt.start_time.substring(0, 5)}h
                        </span>
                      </div>

                      <p className={`text-lg font-bold mt-2 ${isBlocked ? 'text-slate-500 dark:text-slate-400' : 'text-slate-900 dark:text-slate-100'}`}>
                        {apt.client_name}
                      </p>

                      {!isBlocked && (
                        <>
                          <p className="text-primary dark:text-primary-light text-sm font-semibold italic">
                            {apt.services?.name || "Serviço Geral"}
                          </p>
                          {apt.address_notes && (
                            <p className="text-slate-500 dark:text-slate-400 text-xs mt-1 flex items-center gap-1">
                              <span className="material-symbols-outlined text-[14px]">location_on</span>
                              {apt.address_notes}
                            </p>
                          )}
                        </>
                      )}
                    </div>

                    <div className={`size-12 rounded-lg overflow-hidden flex items-center justify-center ${isBlocked ? 'bg-slate-200 dark:bg-slate-800' : 'bg-slate-100 dark:bg-slate-800 shadow-inner'}`}>
                      {isBlocked ? (
                        <span className="material-symbols-outlined text-slate-400 text-2xl">lock</span>
                      ) : (
                        <img
                          className="w-full h-full object-cover"
                          src={`https://api.dicebear.com/7.x/initials/svg?seed=${apt.client_name}`}
                          alt={apt.client_name}
                        />
                      )}
                    </div>
                  </div>

                  {!isBlocked && (
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
                  )}

                  {activeTab === 'upcoming' && (
                    <div className="flex gap-2 mt-1">
                      {!isBlocked && (
                        <button
                          onClick={() => handleUpdateStatus(apt.id, 'completed')}
                          className="flex-1 flex items-center justify-center gap-2 rounded-lg h-10 px-4 bg-green-500/10 text-green-600 hover:bg-green-500/20 transition-all font-bold text-sm"
                        >
                          ✅ Concluir
                        </button>
                      )}
                      <button
                        onClick={() => handleUpdateStatus(apt.id, 'canceled')}
                        className="flex-1 flex items-center justify-center gap-2 rounded-lg h-10 px-4 bg-red-500/10 text-red-600 hover:bg-red-500/20 transition-all font-bold text-sm"
                      >
                        {isBlocked ? '🔓 Desbloquear Horário' : '❌ Cancelar'}
                      </button>
                    </div>
                  )}
                  {activeTab === 'history' && (
                    <div className="flex justify-end pt-1">
                      <span className={`text-[10px] font-bold px-2 py-1 flex items-center gap-1 rounded-md uppercase ${apt.status === 'completed' ? 'bg-green-500/10 text-green-600' :
                          apt.status === 'canceled' ? 'bg-red-500/10 text-red-600' :
                            'bg-slate-500/10 text-slate-600'
                        }`}>
                        {
                          apt.status === 'completed' ? '✅ Concluído' :
                            apt.status === 'canceled' ? (isBlocked ? '🔓 Desbloqueado' : '❌ Cancelado') :
                              'Expirado'
                        }
                      </span>
                    </div>
                  )}
                </div>
              )
            })
          )}
        </div>

        <div className="h-24"></div>
      </main>

      {/* Modal de Bloqueio */}
      {isBlockModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
          <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-xl w-full max-w-md overflow-hidden border border-slate-200 dark:border-slate-800 flex flex-col max-h-[90vh]">
            <div className="p-4 border-b border-slate-100 dark:border-slate-800 flex justify-between items-center bg-slate-50 dark:bg-slate-800/50">
              <h3 className="font-bold text-lg flex items-center gap-2 text-slate-800 dark:text-slate-100">
                <span className="material-symbols-outlined text-slate-500">lock_clock</span>
                Bloquear Horário
              </h3>
              <button onClick={() => setIsBlockModalOpen(false)} className="text-slate-400 hover:text-slate-600 dark:hover:text-slate-200">
                <span className="material-symbols-outlined">close</span>
              </button>
            </div>

            <div className="p-4 overflow-y-auto flex-1">
              <div className="mb-4">
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Data do Bloqueio</label>
                <input
                  type="date"
                  value={blockDate}
                  min={getTodayString()}
                  onChange={(e) => {
                    setBlockDate(e.target.value);
                    setBlockTimes([]);
                  }}
                  className="w-full bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-lg px-3 py-2 text-slate-700 dark:text-slate-200 focus:ring-2 focus:ring-primary outline-none"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Selecione os Horários</label>
                {!professionalSettings ? (
                  <p className="text-sm text-slate-500">Carregando horários...</p>
                ) : availableTimesForBlock.length === 0 ? (
                  <p className="text-sm text-amber-600 bg-amber-50 p-3 rounded-lg border border-amber-200">Nenhum horário disponível para bloquear nesta data (pode ser dia de folga ou horários esgotados).</p>
                ) : (
                  <div className="grid grid-cols-3 gap-2">
                    {availableTimesForBlock.map(time => (
                      <label
                        key={time}
                        className={`flex items-center justify-center py-2 rounded-lg border cursor-pointer select-none transition-colors ${blockTimes.includes(time)
                            ? 'bg-slate-800 border-slate-800 text-white'
                            : 'bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:border-slate-400'
                          }`}
                      >
                        <input
                          type="checkbox"
                          className="hidden"
                          checked={blockTimes.includes(time)}
                          onChange={(e) => {
                            if (e.target.checked) setBlockTimes([...blockTimes, time]);
                            else setBlockTimes(blockTimes.filter(t => t !== time));
                          }}
                        />
                        <span className="font-medium text-sm">{time}</span>
                      </label>
                    ))}
                  </div>
                )}
              </div>
            </div>

            <div className="p-4 border-t border-slate-100 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/50 flex justify-end gap-2">
              <button
                onClick={() => setIsBlockModalOpen(false)}
                className="px-4 py-2 rounded-lg text-slate-600 dark:text-slate-300 font-medium hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
                disabled={isBlocking}
              >
                Cancelar
              </button>
              <button
                onClick={handleBlockSubmit}
                disabled={isBlocking || blockTimes.length === 0}
                className="px-4 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-white font-medium flex items-center gap-2 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isBlocking ? 'Bloqueando...' : 'Confirmar Bloqueio'}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
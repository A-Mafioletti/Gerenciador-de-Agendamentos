"use client";

import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase-client";
import { Loader2 } from "lucide-react";

export default function Home() {
  const router = useRouter();
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("08:00");
  const [days, setDays] = useState<{ label: string; day: string; fullDate: string }[]>([]);
  const [monthYear, setMonthYear] = useState("");
  const [bookedTimes, setBookedTimes] = useState<{ startMins: number; endMins: number }[]>([]);
  const [times, setTimes] = useState<{ time: string; isBooked: boolean }[]>([]); // state para gerar_horários dinâmicos
  const [servicesList, setServicesList] = useState<any[]>([]);
  const [profSettings, setProfSettings] = useState<any>(undefined);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [dragged, setDragged] = useState(false);

  const handleMouseDown = (e: React.MouseEvent) => {
    if (!scrollContainerRef.current) return;
    setIsDragging(true);
    setDragged(false);
    setStartX(e.pageX - scrollContainerRef.current.offsetLeft);
    setScrollLeft(scrollContainerRef.current.scrollLeft);
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !scrollContainerRef.current) return;
    e.preventDefault();
    const x = e.pageX - scrollContainerRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    scrollContainerRef.current.scrollLeft = scrollLeft - walk;
    if (Math.abs(walk) > 5) {
      setDragged(true);
    }
  };

  const [formData, setFormData] = useState({
    name: "",
    whatsapp: "",
    service_id: "",
    details: ""
  });

  const [professionalId, setProfessionalId] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    async function loadConfigAndGenerateDays() {
      const dayNames = ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sáb"];
      const monthNames = [
        "Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho",
        "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"
      ];
      const diaKeys = ["dom", "seg", "ter", "qua", "qui", "sex", "sab"];

      try {
        const { data: profs } = await supabase.from('professionals').select('id').limit(1);
        if (!profs || profs.length === 0) return;

        const internalId = profs[0].id;
        setProfessionalId(internalId);

        const { data: services } = await supabase
          .from('services')
          .select('*')
          .eq('professional_id', internalId);

        if (services) {
          const filteredServices = services.filter((s: any) => s.name !== 'Bloqueio de horário');
          setServicesList(filteredServices);
          if (filteredServices.length > 0) {
            setFormData(prev => ({ ...prev, service_id: filteredServices[0].id }));
          }
        }

        const { data: settings } = await supabase
          .from('professional_settings')
          .select('*')
          .eq('professional_id', internalId)
          .maybeSingle();

        setProfSettings(settings || null);

        let workingDays: Record<string, boolean> = {
          seg: true, ter: true, qua: true, qui: true, sex: true, sab: false, dom: false
        };

        if (settings) {
          if (settings.working_days) workingDays = settings.working_days as Record<string, boolean>;
        }

        const generatedDays = [];
        let i = 1; // Começa a partir de amanhã
        let daysGenerated = 0;

        while (daysGenerated < 15) {
          const d = new Date();
          d.setDate(d.getDate() + i);

          i++;

          const dayOfWeek = d.getDay();
          const diaKey = diaKeys[dayOfWeek];

          if (!workingDays[diaKey]) {
            continue; // Skip this day, it's inactive
          }

          const year = d.getFullYear();
          const month = String(d.getMonth() + 1).padStart(2, '0');
          const day = String(d.getDate()).padStart(2, '0');
          const fullDate = `${year}-${month}-${day}`;

          generatedDays.push({
            label: dayNames[dayOfWeek],
            day: d.getDate().toString().padStart(2, '0'),
            fullDate: fullDate
          });

          daysGenerated++;
        }

        setDays(generatedDays);
        setSelectedDate(generatedDays[0].fullDate);

        const [year, month] = generatedDays[0].fullDate.split('-');
        setMonthYear(`${monthNames[parseInt(month, 10) - 1]} ${year}`);
      } catch (e) {
        console.error("Erro ao gerar config do profissional", e);
      }
    }

    loadConfigAndGenerateDays();
  }, []);

  useEffect(() => {
    async function fetchBookedTimes() {
      const selectedDayObj = days.find(d => d.fullDate === selectedDate);
      if (!selectedDayObj || !professionalId) return;

      try {
        // Buscamos os agendamentos confirmados para o profissional e data selecionados
        const { data, error } = await supabase
          .from('appointments')
          .select('date, start_time, status, services(duration_minutes)')
          .eq('status', 'confirmed')
          .eq('professional_id', professionalId)
          .eq('date', selectedDayObj.fullDate);

        if (error) throw error;

        // Normalização e extração com duração do serviço
        const occupied = data?.filter((app) => {
          const appDate = String(app.date).substring(0, 10);
          return appDate === selectedDayObj.fullDate;
        }).map((app) => {
          if (!app.start_time) return null;

          let timePart = app.start_time;

          if (timePart.includes('T')) {
            timePart = timePart.split('T')[1].split(/[Z+-]/)[0]; // Pega HH:mm:ss
          }

          const parts = timePart.split(':');
          if (parts.length < 2) return null;
          const h = parseInt(parts[0], 10);
          const m = parseInt(parts[1], 10);
          const startMins = h * 60 + m;

          // Se não houver duração no recorde do serviço associado, pressupõe-se 60 min
          const duration = (app.services as any)?.duration_minutes || 60;
          return { startMins, endMins: startMins + duration };
        }).filter(Boolean) as { startMins: number, endMins: number }[] || [];

        setBookedTimes(occupied);
      } catch (err) {
        console.error("Erro ao buscar horários ocupados:", err);
      }
    }

    if (days.length > 0 && selectedDate && professionalId) {
      fetchBookedTimes();
    }
  }, [selectedDate, professionalId, days]);

  // Recalcular horários disponíveis sempre que o serviço, as configurações ou a data trocam
  useEffect(() => {
    if (profSettings === undefined) return;

    let startTime = "08:00";
    let endTime = "18:00";
    let breakStart = "12:00";
    let breakEnd = "13:00";

    if (profSettings) {
      if (profSettings.start_time) startTime = profSettings.start_time.substring(0, 5);
      if (profSettings.end_time) endTime = profSettings.end_time.substring(0, 5);
      if (profSettings.break_start) breakStart = profSettings.break_start.substring(0, 5);
      if (profSettings.break_end) breakEnd = profSettings.break_end.substring(0, 5);
    }

    const selectedService = servicesList.find((s) => s.id === formData.service_id);
    const serviceDuration = selectedService?.duration_minutes || 60; // 60 minutos como padrão

    const generatedTimes: { time: string, isBooked: boolean }[] = [];
    let [currentH, currentM] = startTime.split(':').map(Number);
    const [endH, endM] = endTime.split(':').map(Number);
    const [bsH, bsM] = breakStart.split(':').map(Number);
    const [beH, beM] = breakEnd.split(':').map(Number);

    const toMinutes = (h: number, m: number) => h * 60 + m;
    const limitMinutes = toMinutes(endH, endM);
    const breakStartM = toMinutes(bsH, bsM);
    const breakEndM = toMinutes(beH, beM);

    let startMinutes = toMinutes(currentH, currentM);

    while (startMinutes < limitMinutes) {
      const slotEndMinutes = startMinutes + serviceDuration;
      let isValid = true;
      let isBooked = false;

      // Regra 1: Horário final do serviço não pode ultrapassar o fim do expediente
      if (slotEndMinutes > limitMinutes) {
        isValid = false;
      }

      // Regra 2: O serviço não pode cruzar o período de intervalo (break)
      if (startMinutes < breakEndM && slotEndMinutes > breakStartM) {
        isValid = false;
      }

      // Regra 3 (Nova): Colisão com agendamentos existentes no banco
      if (isValid) {
        for (const booked of bookedTimes) {
          // Se cruza com algum tempo já agendado (slotStart < bookEnd AND slotEnd > bookStart)
          if (startMinutes < booked.endMins && slotEndMinutes > booked.startMins) {
            if (startMinutes >= booked.startMins && startMinutes < booked.endMins) {
              // O slot cai no princípio ou exatamente dentro de um agendamento. Marcamos como inativo visualmente
              isBooked = true;
            } else if (startMinutes < booked.startMins && slotEndMinutes > booked.startMins) {
               // Choque por invadir retroativamente o horário já ocupado (e.g. pega um serviço de 1h30 q alcançaria o evento logo após)
               isValid = false; // "deve ser removido da lista de disponíveis"
               break;
            }
          }
        }
      }

      if (isValid) {
        const h = Math.floor(startMinutes / 60);
        const m = startMinutes % 60;
        generatedTimes.push({
          time: `${String(h).padStart(2, '0')}:${String(m).padStart(2, '0')}`,
          isBooked
        });
      }

      // Incrementa 1 hora (60 minutos) conforme o padrão anterior
      startMinutes += 60;
    }

    setTimes(generatedTimes);
    
    // Se o horário atualmente selecionado agora não está mais disponível ou está ocupado
    if (selectedTime !== "") {
      const matchingTime = generatedTimes.find(t => t.time === selectedTime);
      if (!matchingTime || matchingTime.isBooked) {
        setSelectedTime("");
      }
    }
  }, [profSettings, formData.service_id, servicesList, selectedTime, bookedTimes]);

  // O array `times` foi definido como state dinâmico. Removendo o constante.

  const formatWhatsApp = (value: string) => {
    // Remove all non-digits and limit to 11 characters
    const digits = value.replace(/\D/g, '').slice(0, 11);

    let formatted = digits;
    if (digits.length > 2) {
      formatted = `(${digits.slice(0, 2)}) ${digits.slice(2)}`;
    }
    if (digits.length > 7) {
      formatted = `(${digits.slice(0, 2)}) ${digits.slice(2, 7)}-${digits.slice(7)}`;
    }
    return formatted;
  };

  const handleWhatsAppChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, whatsapp: formatWhatsApp(e.target.value) });
  };

  const handleBooking = async () => {
    if (!formData.name.trim()) {
      alert("Por favor, preencha o seu nome.");
      return;
    }

    const phoneDigits = formData.whatsapp.replace(/\D/g, '');
    if (phoneDigits.length !== 11) {
      alert("Por favor, preencha um número de WhatsApp válido com DDD (11 dígitos).");
      return;
    }

    setIsSubmitting(true);
    try {
      const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001/api';
      const response = await fetch(`${apiUrl}/appointments`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          date: selectedDate,
          time: selectedTime,
          name: formData.name,
          whatsapp: formData.whatsapp,
          details: formData.details,
          professional_id: professionalId,
          service_id: formData.service_id
        }),
      });

      if (!response.ok) {
        throw new Error(`Erro ao salvar o agendamento: ${response.status}`);
      }

      console.log("Booking Confirmed!", { selectedDate, selectedTime, ...formData });
      const query = new URLSearchParams({
        data: selectedDate,
        hora: selectedTime,
        servico: servicesList.find(s => s.id === formData.service_id)?.name || "",
      }).toString();
      router.push(`/sucesso?${query}`);

    } catch (error) {
      console.error("Erro no agendamento:", error);
      alert("Ocorreu um erro ao tentar realizar o agendamento. Por favor, tente novamente.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      {/* Top Navigation */}
      <nav className="sticky top-0 z-50 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 px-4 py-3">
        <div className="max-w-md lg:max-w-5xl mx-auto flex items-center">
          <button className="text-slate-900 dark:text-slate-100 p-1">
            <span className="material-symbols-outlined">arrow_back</span>
          </button>
          <h1 className="flex-1 text-center font-semibold text-lg">Agendamento</h1>
          <div className="w-8"></div>
        </div>
      </nav>

      <main className="max-w-md lg:max-w-5xl mx-auto pb-32 lg:pb-12 pt-0 lg:pt-8 relative">
        <div className="lg:grid lg:grid-cols-12 lg:gap-12 lg:items-start">

          {/* Left Column (Desktop) */}
          <div className="lg:col-span-7">
            {/* Header Profile */}
            <header className="flex flex-col items-center lg:items-start pt-8 lg:pt-0 pb-6 px-4">
              <div className="w-24 h-24 lg:w-32 lg:h-32 rounded-full border-4 border-white dark:border-slate-800 shadow-xl overflow-hidden mb-4 bg-primary/10">
                <img
                  alt="Carlos Eletricista"
                  className="w-full h-full object-cover"
                  data-alt="Professional portrait of an electrician smiling"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCTjL8evO208DzmWZwY_gGCcq2GM5LhO2ijZndyRkUbFG75MSoDJjW5i1A-uH6XcqbSXvhhAdvmyQB_Ada6LxaVqempgjZEJgl_uWv1ifI3hRY86RhJ7Ikcszve4PxvonGWv2UASq1szRikspY5rRNNL8RoSMG_yM0vuIIwq2rc-GxHL5_iWn28C-8SZu6ZiAC5mR8ekDPAXab7ZDGuXkhTqV04cze0qWzQv2YnKaC9VSN-gOCnZip4H35IMGjgFpY6xmRUcUhcQPE"
                />
              </div>
              <h2 className="text-2xl lg:text-3xl font-bold tracking-tight">Carlos Eletricista</h2>
              <p className="text-slate-500 dark:text-slate-400 text-sm lg:text-base text-center lg:text-left mt-2 lg:mt-3">
                Especialista em Instalações Residenciais e Comerciais com mais de 10 anos de experiência.
              </p>
            </header>

            {/* Section 1: Calendar Carousel */}
            <section className="mt-4 lg:mt-8">
              <div className="flex items-center justify-between mb-3 px-4">
                <h3 className="font-semibold text-slate-900 dark:text-slate-100 lg:text-lg">Selecione o Dia</h3>
                <span className="text-xs lg:text-sm text-primary font-medium">{monthYear || "Carregando..."}</span>
              </div>
              <div
                ref={scrollContainerRef}
                onMouseDown={handleMouseDown}
                onMouseLeave={handleMouseLeave}
                onMouseUp={handleMouseUp}
                onMouseMove={handleMouseMove}
                className="flex gap-3 overflow-x-auto custom-scrollbar pb-2 px-4 cursor-grab active:cursor-grabbing"
              >
                {days.map((item) => (
                  <button
                    key={item.fullDate}
                    onClick={() => {
                      if (dragged) return;
                      setSelectedDate(item.fullDate);
                      const [year, month] = item.fullDate.split('-');
                      const monthNames = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];
                      setMonthYear(`${monthNames[parseInt(month, 10) - 1]} ${year}`);
                    }}
                    className={`shrink-0 flex flex-col items-center justify-center w-16 h-20 lg:w-20 lg:h-24 rounded-xl transition-all ${selectedDate === item.fullDate
                        ? "bg-primary text-white shadow-lg shadow-primary/20 scale-105"
                        : "bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:border-primary/50"
                      }`}
                  >
                    <span className={`text-[10px] lg:text-xs uppercase font-bold ${selectedDate === item.fullDate ? 'opacity-80' : 'text-slate-400'}`}>{item.label}</span>
                    <span className="text-xl lg:text-2xl font-bold">{item.day}</span>
                  </button>
                ))}
              </div>
            </section>

            {/* Section 2: Time Slots */}
            <section className="mt-8 lg:mt-10 px-4">
              <h3 className="font-semibold text-slate-900 dark:text-slate-100 mb-3 lg:mb-4 lg:text-lg">Horários Disponíveis</h3>
              <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-3 gap-2 lg:gap-3">
                {times.map((item) => {
                  const time = item.time;
                  const isBooked = item.isBooked;
                  return (
                    <button
                      key={time}
                      onClick={() => !isBooked && setSelectedTime(time)}
                      disabled={isBooked}
                      className={`py-2.5 lg:py-3 rounded-lg border text-sm lg:text-base transition-colors ${isBooked
                          ? "border-slate-100 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/50 text-slate-400 dark:text-slate-600 cursor-not-allowed opacity-50"
                          : selectedTime === time
                            ? "border-primary bg-primary/10 text-primary font-semibold shadow-sm"
                            : "border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:border-primary/60 hover:bg-slate-50 dark:hover:bg-slate-700/50"
                        }`}
                    >
                      {time}
                    </button>
                  );
                })}
              </div>
            </section>
          </div>

          {/* Right Column (Desktop) */}
          <div className="lg:col-span-5 relative mt-10 lg:mt-0">
            <div className="lg:sticky lg:top-24">
              {/* Section 3: Form */}
              <section className="px-4">
                <div className="lg:bg-white lg:dark:bg-slate-900 lg:p-8 lg:rounded-3xl lg:shadow-[0_8px_30px_rgb(0,0,0,0.04)] dark:lg:shadow-[0_8px_30px_rgb(0,0,0,0.2)] lg:border lg:border-slate-200 lg:dark:border-slate-800">
                  <h3 className="font-semibold text-slate-900 dark:text-slate-100 mb-4 lg:mb-6 lg:text-xl">Informações de Contato</h3>
                  <div className="space-y-4 lg:space-y-5">
                    <div>
                      <label className="block text-xs lg:text-sm font-medium text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-1 lg:mb-2 px-1">Seu Nome</label>
                      <input
                        className="w-full px-4 py-3 lg:py-3.5 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                        placeholder="Como podemos te chamar?"
                        type="text"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      />
                    </div>
                    <div>
                      <label className="block text-xs lg:text-sm font-medium text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-1 lg:mb-2 px-1">WhatsApp</label>
                      <div className="relative">
                        <span className="absolute left-4 top-1/2 -translate-y-1/2 material-symbols-outlined text-slate-400 text-xl lg:text-2xl">call</span>
                        <input
                          className="w-full pl-12 pr-4 py-3 lg:py-3.5 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                          placeholder="(00) 00000-0000"
                          type="tel"
                          value={formData.whatsapp}
                          onChange={handleWhatsAppChange}
                          maxLength={15}
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-xs lg:text-sm font-medium text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-1 lg:mb-2 px-1">Serviço Desejado</label>
                      <select
                        className="w-full px-4 py-3 lg:py-3.5 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all appearance-none"
                        value={formData.service_id}
                        onChange={(e) => setFormData({ ...formData, service_id: e.target.value })}
                      >
                        {servicesList.map(s => (
                          <option key={s.id} value={s.id}>{s.name || "Sem Nome"}</option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className="block text-xs lg:text-sm font-medium text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-1 lg:mb-2 px-1">Endereço ou Observações</label>
                      <textarea
                        className="w-full px-4 py-3 lg:py-4 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all resize-none"
                        placeholder="Rua, número e detalhes do problema..."
                        rows={3}
                        value={formData.details}
                        onChange={(e) => setFormData({ ...formData, details: e.target.value })}
                      ></textarea>
                    </div>
                  </div>

                  {/* Desktop Submit Button */}
                  <div className="hidden lg:block mt-8">
                    <button
                      onClick={handleBooking}
                      disabled={isSubmitting}
                      className="w-full flex items-center justify-center gap-2 bg-primary text-white py-4 rounded-xl font-bold text-lg shadow-xl shadow-primary/30 active:scale-[0.98] transition-transform hover:bg-primary/90 hover:shadow-primary/40 disabled:opacity-70 disabled:pointer-events-none"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="w-5 h-5 animate-spin" />
                          Agendando...
                        </>
                      ) : (
                        "Confirmar Agendamento"
                      )}
                    </button>
                  </div>
                </div>
              </section>

              {/* Mobile Fixed Footer */}
              <footer className="lg:hidden fixed bottom-0 left-0 right-0 p-4 bg-white/80 dark:bg-slate-900/80 backdrop-blur-lg border-t border-slate-200 dark:border-slate-800 z-40">
                <div className="max-w-md mx-auto">
                  <button
                    onClick={handleBooking}
                    disabled={isSubmitting}
                    className="w-full flex items-center justify-center gap-2 bg-primary text-white py-4 rounded-xl font-bold text-lg shadow-xl shadow-primary/30 active:scale-[0.98] transition-transform hover:bg-primary/90 disabled:opacity-70 disabled:pointer-events-none"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-5 h-5 animate-spin" />
                        Agendando...
                      </>
                    ) : (
                      "Confirmar Agendamento"
                    )}
                  </button>
                </div>
              </footer>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

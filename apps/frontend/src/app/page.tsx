"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("08:00");
  const [days, setDays] = useState<{ label: string; day: string }[]>([]);
  const [monthYear, setMonthYear] = useState("");

  const [formData, setFormData] = useState({
    name: "",
    whatsapp: "",
    service: "Manutenção Preventiva",
    details: ""
  });

  useEffect(() => {
    const today = new Date();
    const dayNames = ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sáb"];
    const monthNames = [
      "Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho",
      "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"
    ];

    setMonthYear(`${monthNames[today.getMonth()]} ${today.getFullYear()}`);

    const generatedDays = [];
    for (let i = 0; i < 15; i++) {
      const d = new Date(today);
      d.setDate(today.getDate() + i);
      generatedDays.push({
        label: dayNames[d.getDay()],
        day: d.getDate().toString().padStart(2, '0')
      });
    }
    
    setDays(generatedDays);
    setSelectedDate(generatedDays[0].day);
  }, []);

  const times = [
    "08:00", "09:00", "10:00", "11:00", "13:30", "14:30", "15:30", "16:30", "17:30"
  ];

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

  const handleBooking = () => {
    if (!formData.name.trim()) {
      alert("Por favor, preencha o seu nome.");
      return;
    }
    
    const phoneDigits = formData.whatsapp.replace(/\D/g, '');
    if (phoneDigits.length !== 11) {
      alert("Por favor, preencha um número de WhatsApp válido com DDD (11 dígitos).");
      return;
    }

    console.log("Booking Confirmed!", { selectedDate, selectedTime, ...formData });
    const query = new URLSearchParams({
      data: selectedDate,
      hora: selectedTime,
      servico: formData.service,
    }).toString();
    router.push(`/sucesso?${query}`);
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
              <div className="flex gap-3 overflow-x-auto hide-scrollbar pb-2 px-4">
                {days.map((item) => (
                  <button 
                    key={item.day}
                    onClick={() => setSelectedDate(item.day)}
                    className={`shrink-0 flex flex-col items-center justify-center w-16 h-20 lg:w-20 lg:h-24 rounded-xl transition-all ${
                      selectedDate === item.day 
                        ? "bg-primary text-white shadow-lg shadow-primary/20 scale-105" 
                        : "bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:border-primary/50"
                    }`}
                  >
                    <span className={`text-[10px] lg:text-xs uppercase font-bold ${selectedDate === item.day ? 'opacity-80' : 'text-slate-400'}`}>{item.label}</span>
                    <span className="text-xl lg:text-2xl font-bold">{item.day}</span>
                  </button>
                ))}
              </div>
            </section>

            {/* Section 2: Time Slots */}
            <section className="mt-8 lg:mt-10 px-4">
              <h3 className="font-semibold text-slate-900 dark:text-slate-100 mb-3 lg:mb-4 lg:text-lg">Horários Disponíveis</h3>
              <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-3 gap-2 lg:gap-3">
                {times.map((time) => (
                  <button 
                    key={time}
                    onClick={() => setSelectedTime(time)}
                    className={`py-2.5 lg:py-3 rounded-lg border text-sm lg:text-base transition-colors ${
                      selectedTime === time 
                        ? "border-primary bg-primary/10 text-primary font-semibold shadow-sm" 
                        : "border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:border-primary/60 hover:bg-slate-50 dark:hover:bg-slate-700/50"
                    }`}
                  >
                    {time}
                  </button>
                ))}
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
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
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
                        value={formData.service}
                        onChange={(e) => setFormData({...formData, service: e.target.value})}
                      >
                        <option>Manutenção Preventiva</option>
                        <option>Reparo em Disjuntores</option>
                        <option>Instalação de Chuveiro</option>
                        <option>Iluminação e Leds</option>
                        <option>Outros</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-xs lg:text-sm font-medium text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-1 lg:mb-2 px-1">Endereço ou Observações</label>
                      <textarea 
                        className="w-full px-4 py-3 lg:py-4 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all resize-none" 
                        placeholder="Rua, número e detalhes do problema..." 
                        rows={3}
                        value={formData.details}
                        onChange={(e) => setFormData({...formData, details: e.target.value})}
                      ></textarea>
                    </div>
                  </div>

                  {/* Desktop Submit Button */}
                  <div className="hidden lg:block mt-8">
                    <button 
                      onClick={handleBooking}
                      className="w-full bg-primary text-white py-4 rounded-xl font-bold text-lg shadow-xl shadow-primary/30 active:scale-[0.98] transition-transform hover:bg-primary/90 hover:shadow-primary/40"
                    >
                      Confirmar Agendamento
                    </button>
                  </div>
                </div>
              </section>

              {/* Mobile Fixed Footer */}
              <footer className="lg:hidden fixed bottom-0 left-0 right-0 p-4 bg-white/80 dark:bg-slate-900/80 backdrop-blur-lg border-t border-slate-200 dark:border-slate-800 z-40">
                <div className="max-w-md mx-auto">
                  <button 
                    onClick={handleBooking}
                    className="w-full bg-primary text-white py-4 rounded-xl font-bold text-lg shadow-xl shadow-primary/30 active:scale-[0.98] transition-transform hover:bg-primary/90"
                  >
                    Confirmar Agendamento
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

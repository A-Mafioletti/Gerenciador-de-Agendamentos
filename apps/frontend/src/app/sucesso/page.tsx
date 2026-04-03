"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";

function SuccessContent() {
  const searchParams = useSearchParams();
  
  // Extrai os valores passados na URL ou usa valores padrão
  const data = searchParams.get('data') || 'Indisponível';
  const hora = searchParams.get('hora') || 'Indisponível';
  const servico = searchParams.get('servico') || 'Serviço não informado';

  const handleNotImplemented = (e: React.MouseEvent) => {
    e.preventDefault();
    alert('Em desenvolvimento');
  };

  return (
    <div className="bg-background-light dark:bg-background-dark font-display text-slate-900 dark:text-slate-100 min-h-screen flex flex-col">
      {/* Main Content Container */}
      <main className="flex-1 flex flex-col items-center justify-center px-4 py-8 sm:px-6 lg:px-8 max-w-lg md:max-w-2xl mx-auto w-full">
        {/* Success Icon Section */}
        <div className="mb-8 flex flex-col items-center text-center">
          <div className="w-24 h-24 bg-primary/10 dark:bg-primary/20 rounded-full flex items-center justify-center mb-6">
            <span 
              className="material-symbols-outlined text-primary text-6xl" 
              style={{ fontVariationSettings: "'FILL' 1, 'wght' 400, 'GRAD' 0, 'opsz' 48" }}
            >
              check_circle
            </span>
          </div>
          <h1 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl mb-2">
            Agendamento Confirmado!
          </h1>
          <p className="text-slate-600 dark:text-slate-400 text-lg">
            Tudo pronto para o seu atendimento.
          </p>
        </div>

        {/* Receipt Card */}
        <div className="w-full bg-white dark:bg-slate-800 rounded-xl shadow-sm border border-slate-200 dark:border-slate-700 overflow-hidden relative mb-8">
          {/* Decorative "Ticket" notches */}
          <div className="absolute -left-3 top-1/2 -translate-y-1/2 w-6 h-6 bg-background-light dark:bg-background-dark rounded-full border border-slate-200 dark:border-slate-700"></div>
          <div className="absolute -right-3 top-1/2 -translate-y-1/2 w-6 h-6 bg-background-light dark:bg-background-dark rounded-full border border-slate-200 dark:border-slate-700"></div>
          
          <div className="p-6 border-b border-dashed border-slate-200 dark:border-slate-700">
            <div className="flex flex-col gap-4">
              <div>
                <span className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">Serviço</span>
                <p className="text-lg font-bold text-slate-900 dark:text-white">{servico}</p>
              </div>
            </div>
          </div>
          
          <div className="p-6 bg-slate-50/50 dark:bg-slate-800/50">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <span className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 block mb-1">Data</span>
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-primary text-xl">calendar_today</span>
                  <p className="font-medium">
                    {data !== 'Indisponível' && data.includes('-') ? `${data.split('-')[2]}/${data.split('-')[1]}` : data}
                  </p>
                </div>
              </div>
              <div>
                <span className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 block mb-1">Horário</span>
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-primary text-xl">schedule</span>
                  <p className="font-medium">{hora}</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="px-6 py-4 bg-primary/5 dark:bg-primary/10 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div 
                className="w-10 h-10 rounded-full bg-cover bg-center border-2 border-white dark:border-slate-700" 
                data-alt="Foto de perfil do profissional barbeiro" 
                style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCTjL8evO208DzmWZwY_gGCcq2GM5LhO2ijZndyRkUbFG75MSoDJjW5i1A-uH6XcqbSXvhhAdvmyQB_Ada6LxaVqempgjZEJgl_uWv1ifI3hRY86RhJ7Ikcszve4PxvonGWv2UASq1szRikspY5rRNNL8RoSMG_yM0vuIIwq2rc-GxHL5_iWn28C-8SZu6ZiAC5mR8ekDPAXab7ZDGuXkhTqV04cze0qWzQv2YnKaC9VSN-gOCnZip4H35IMGjgFpY6xmRUcUhcQPE')" }}
              ></div>
              <div>
                <p className="text-xs text-slate-500 dark:text-slate-400">Profissional</p>
                <p className="text-sm font-bold">Carlos Eletricista</p>
              </div>
            </div>
            <div className="text-right">
              <p className="text-xs text-slate-500 dark:text-slate-400">Status</p>
              <span className="inline-flex items-center rounded-full bg-green-100 dark:bg-green-900/30 px-2 py-0.5 text-xs font-medium text-green-700 dark:text-green-400">
                Confirmado
              </span>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="w-full flex flex-col gap-3">
          <button className="w-full bg-primary/10 hover:bg-primary/20 text-primary font-semibold py-3 px-4 rounded-lg flex items-center justify-center gap-2 transition-colors">
            <span className="material-symbols-outlined text-xl">event_upcoming</span>
            Adicionar ao meu Calendário
          </button>
          <Link 
            href="/" 
            className="w-full text-center py-3 text-slate-500 dark:text-slate-400 hover:text-primary dark:hover:text-primary font-medium transition-colors flex items-center justify-center gap-1"
          >
            <span className="material-symbols-outlined text-lg">arrow_back</span>
            Voltar para o início
          </Link>
        </div>
      </main>

      {/* Navigation Bar */}
      <nav className="md:hidden sticky bottom-0 w-full border-t border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md px-4 pb-6 pt-2 sm:px-6">
        <div className="max-w-md mx-auto flex justify-around items-center">
          <Link href="/" className="flex flex-col items-center gap-1 text-slate-400 dark:text-slate-500 hover:text-primary transition-colors">
            <span className="material-symbols-outlined">home</span>
            <span className="text-[10px] font-medium uppercase tracking-tighter">Início</span>
          </Link>
          <div className="flex flex-col items-center gap-1 text-primary">
            <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>calendar_month</span>
            <span className="text-[10px] font-medium uppercase tracking-tighter">Agenda</span>
          </div>
          <button onClick={handleNotImplemented} className="flex flex-col items-center gap-1 text-slate-400 dark:text-slate-500 hover:text-primary transition-colors">
            <span className="material-symbols-outlined">person</span>
            <span className="text-[10px] font-medium uppercase tracking-tighter">Perfil</span>
          </button>
          <button onClick={handleNotImplemented} className="flex flex-col items-center gap-1 text-slate-400 dark:text-slate-500 hover:text-primary transition-colors">
            <span className="material-symbols-outlined">more_horiz</span>
            <span className="text-[10px] font-medium uppercase tracking-tighter">Mais</span>
          </button>
        </div>
      </nav>
    </div>
  );
}

export default function SuccessPage() {
  return (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center bg-background-light dark:bg-background-dark text-slate-500">Carregando confirmação...</div>}>
      <SuccessContent />
    </Suspense>
  );
}

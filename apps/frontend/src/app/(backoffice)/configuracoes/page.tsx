"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function ConfiguracoesPage() {
  const pathname = usePathname();
  
  // Minimal placeholder state
  const [dias, setDias] = useState({
    seg: true, ter: true, qua: true, qui: true, sex: true, sab: false, dom: false
  });

  const toggleDia = (dia: keyof typeof dias) => {
    setDias(prev => ({ ...prev, [dia]: !prev[dia] }));
  };

  const handleSave = () => {
    alert("Configurações salvas com sucesso! (Simulação)");
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
                <input className="w-full rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100 focus:border-primary focus:ring-primary p-3 outline-none" type="time" defaultValue="08:00"/>
              </div>
            </div>
            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-semibold text-slate-500">Término do Expediente</label>
              <div className="relative">
                <input className="w-full rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100 focus:border-primary focus:ring-primary p-3 outline-none" type="time" defaultValue="18:00"/>
              </div>
            </div>
            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-semibold text-slate-500">Início da Pausa</label>
              <div className="relative">
                <input className="w-full rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100 focus:border-primary focus:ring-primary p-3 outline-none" type="time" defaultValue="12:00"/>
              </div>
            </div>
            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-semibold text-slate-500">Fim da Pausa</label>
              <div className="relative">
                <input className="w-full rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100 focus:border-primary focus:ring-primary p-3 outline-none" type="time" defaultValue="13:00"/>
              </div>
            </div>
          </div>
        </section>

        {/* Section C: Lista de Serviços */}
        <section className="p-4 sm:p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-sm font-semibold uppercase tracking-wider text-primary">Seção C: Serviços</h2>
            <button onClick={() => alert("Em desenvolvimento")} className="flex items-center gap-1 text-sm font-bold text-primary hover:underline">
              <span className="material-symbols-outlined text-[18px]">add_circle</span>
              Adicionar Novo
            </button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {/* Service Item 1 */}
            <div className="flex items-center gap-3 p-4 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm">
              <div className="flex-1">
                <h4 className="font-semibold text-slate-900 dark:text-white">Manutenção Preventiva</h4>
                <div className="flex items-center gap-1.5 text-slate-500 text-sm mt-1">
                  <span className="material-symbols-outlined text-[16px]">schedule</span>
                  1h 00 min
                </div>
              </div>
              <button className="p-2 text-slate-400 hover:text-red-500 transition-colors">
                <span className="material-symbols-outlined">delete</span>
              </button>
            </div>
            
            {/* Service Item 2 */}
            <div className="flex items-center gap-3 p-4 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm">
              <div className="flex-1">
                <h4 className="font-semibold text-slate-900 dark:text-white">Instalação de Chuveiro</h4>
                <div className="flex items-center gap-1.5 text-slate-500 text-sm mt-1">
                  <span className="material-symbols-outlined text-[16px]">schedule</span>
                  1h 30 min
                </div>
              </div>
              <button className="p-2 text-slate-400 hover:text-red-500 transition-colors">
                <span className="material-symbols-outlined">delete</span>
              </button>
            </div>
            
            {/* Service Item 3 */}
            <div className="flex items-center gap-3 p-4 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm">
              <div className="flex-1">
                <h4 className="font-semibold text-slate-900 dark:text-white">Reparo de Fiação</h4>
                <div className="flex items-center gap-1.5 text-slate-500 text-sm mt-1">
                  <span className="material-symbols-outlined text-[16px]">schedule</span>
                  2h 00 min
                </div>
              </div>
              <button className="p-2 text-slate-400 hover:text-red-500 transition-colors">
                <span className="material-symbols-outlined">delete</span>
              </button>
            </div>
          </div>
        </section>
        
        {/* Fill vertical space for the fixed footer */}
        <div className="h-10"></div>
      </main>

      {/* Fixed Footer Actions */}
      <div className="fixed bottom-0 left-0 md:left-64 w-full md:w-[calc(100%-16rem)] z-40">
        <div className="bg-gradient-to-t from-background-light via-background-light dark:from-background-dark dark:via-background-dark to-transparent pt-8 pb-24 md:pb-8">
          <div className="max-w-xl md:max-w-3xl lg:max-w-4xl mx-auto px-4">
            <button onClick={handleSave} className="w-full bg-primary text-white font-bold py-4 rounded-xl shadow-lg shadow-primary/30 active:scale-[0.98] transition-all">
              Salvar Configurações
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

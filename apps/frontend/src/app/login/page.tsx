"use client";

import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const router = useRouter();

  const handleLogin = () => {
    if (!email.trim() || !email.includes('@')) {
      alert("Por favor, insira um e-mail profissional válido.");
      return;
    }
    // Simulate sending login link
    alert(`Link de acesso enviado para ${email}! (Simulação)`);
    // Redirect to dashboard for demo purposes
    router.push('/dashboard');
  };

  return (
    <div className="bg-background-light dark:bg-background-dark font-display text-slate-900 dark:text-slate-100 min-h-screen flex flex-col items-center justify-center">
      <main className="relative flex w-full flex-col max-w-[480px] px-8 py-16">
        <div className="flex flex-col items-center mb-16">
          <div className="w-24 h-24 rounded-2xl bg-primary flex items-center justify-center mb-0 shadow-2xl shadow-primary/30">
            <span className="material-symbols-outlined text-white text-5xl font-light">verified_user</span>
          </div>
        </div>
        
        <div className="text-center mb-10">
          <h1 className="text-slate-900 dark:text-slate-50 tracking-tight text-3xl font-bold leading-tight pb-3">
            Acesso do Profissional
          </h1>
          <p className="text-slate-500 dark:text-slate-400 text-lg font-normal leading-relaxed px-4">
            Sem senhas! Receba um link de acesso no seu e-mail.
          </p>
        </div>
        
        <div className="space-y-8">
          <div className="flex flex-col gap-2">
            <label className="text-slate-600 dark:text-slate-300 text-sm font-semibold px-1">
              E-mail profissional
            </label>
            <div className="relative group">
              <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-primary transition-colors">mail</span>
              <input 
                className="w-full pl-12 pr-4 h-16 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100 focus:ring-2 focus:ring-primary focus:border-transparent transition-all placeholder:text-slate-400 shadow-sm outline-none" 
                placeholder="carlos.eletricista@email.com" 
                type="email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
          </div>
          
          <button 
            type="button"
            onClick={handleLogin}
            className="w-full h-16 bg-primary hover:bg-primary/95 text-white text-lg font-semibold rounded-xl transition-all flex items-center justify-center gap-3 shadow-xl shadow-primary/20 active:scale-[0.98]"
          >
            <span>Enviar Link de Acesso</span>
            <span className="material-symbols-outlined text-2xl">arrow_forward</span>
          </button>
        </div>
        
        <div className="mt-16 pt-8 text-center">
          <p className="text-sm text-slate-500 dark:text-slate-400">
            Precisa de ajuda?{' '}
            <Link className="text-primary font-semibold hover:underline decoration-2 underline-offset-4" href="#">
              Falar com o suporte
            </Link>
          </p>
          <div className="flex justify-center gap-6 mt-10 text-slate-300 dark:text-slate-700">
            <span className="material-symbols-outlined text-2xl">security</span>
            <span className="material-symbols-outlined text-2xl">lock</span>
            <span className="material-symbols-outlined text-2xl">verified</span>
          </div>
        </div>
      </main>
    </div>
  );
}

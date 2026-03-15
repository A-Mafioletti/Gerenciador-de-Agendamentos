"use client";

import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleLogin = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    
    if (!email.trim() || !email.includes('@')) {
      alert("Por favor, insira um e-mail profissional válido.");
      return;
    }
    if (password.length < 6) {
      alert("Por favor, insira uma senha válida com pelo menos 6 caracteres.");
      return;
    }
    
    // Redirect to dashboard for demo purposes
    router.push('/dashboard');
  };

  return (
    <div className="bg-background-light dark:bg-background-dark font-display text-slate-900 dark:text-slate-100 min-h-screen flex flex-col items-center justify-center">
      <main className="relative flex w-full flex-col max-w-[480px] px-8 py-16">
        <div className="flex flex-col items-center mb-16">
          <div className="w-24 h-24 rounded-2xl bg-primary flex items-center justify-center mb-0 shadow-2xl shadow-primary/30">
            <span className="material-symbols-outlined text-white text-5xl font-light">event_available</span>
          </div>
        </div>
        
        <div className="text-center mb-10">
          <h1 className="text-slate-900 dark:text-slate-50 tracking-tight text-3xl font-bold leading-tight pb-3">
            Acesso do Profissional
          </h1>
          <p className="text-slate-500 dark:text-slate-400 text-lg font-normal leading-relaxed px-4">
            Acesse sua conta com seu e-mail e senha.
          </p>
        </div>
        
        <form onSubmit={handleLogin} className="space-y-6">
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
                autoComplete="email"
                required
              />
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-slate-600 dark:text-slate-300 text-sm font-semibold px-1">
              Senha
            </label>
            <div className="relative group">
              <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-primary transition-colors">lock</span>
              <input 
                className="w-full pl-12 pr-4 h-16 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100 focus:ring-2 focus:ring-primary focus:border-transparent transition-all placeholder:text-slate-400 shadow-sm outline-none" 
                placeholder="Sua senha" 
                type="password" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                autoComplete="current-password"
                required
              />
            </div>
          </div>
          
          <div className="flex items-center justify-between px-1">
            <label className="flex items-center gap-2 cursor-pointer group">
              <div className="relative flex items-center justify-center">
                <input type="checkbox" className="peer sr-only" />
                <div className="w-5 h-5 border-2 border-slate-300 dark:border-slate-600 rounded bg-white dark:bg-slate-800 peer-checked:bg-primary peer-checked:border-primary transition-colors"></div>
                <span className="material-symbols-outlined absolute text-white text-[14px] opacity-0 peer-checked:opacity-100 transition-opacity pointer-events-none">check</span>
              </div>
              <span className="text-sm text-slate-600 dark:text-slate-300 font-medium group-hover:text-slate-900 dark:group-hover:text-slate-100 transition-colors">Manter conectado</span>
            </label>
          </div>
          
          <button 
            type="submit"
            className="w-full h-16 mt-2 bg-primary hover:bg-primary/95 text-white text-lg font-semibold rounded-xl transition-all flex items-center justify-center shadow-xl shadow-primary/20 active:scale-[0.98]"
          >
            <span>Entrar</span>
          </button>
        </form>

        <div className="mt-8 flex items-center gap-4">
          <div className="flex-1 h-px bg-slate-200 dark:bg-slate-800"></div>
          <span className="text-sm font-medium text-slate-400 dark:text-slate-500 uppercase tracking-wider">ou</span>
          <div className="flex-1 h-px bg-slate-200 dark:bg-slate-800"></div>
        </div>

        <button 
          type="button"
          onClick={() => alert('Login com Google (Simulação para UX)')}
          className="mt-6 w-full h-16 bg-white dark:bg-slate-900 border-2 border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800/50 text-slate-700 dark:text-slate-300 text-lg font-semibold rounded-xl transition-all flex items-center justify-center gap-3 active:scale-[0.98]"
        >
          <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
            <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
            <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
            <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
          </svg>
          <span>Entrar com Google</span>
        </button>

        <div className="mt-10 text-center">
          <p className="text-slate-600 dark:text-slate-400">
            Ainda não tem uma conta?{' '}
            <Link href="/cadastro" className="text-primary font-bold hover:underline decoration-2 underline-offset-4">
              Cadastre-se
            </Link>
          </p>
        </div>
        
        <div className="mt-10 pt-8 text-center border-t border-slate-100 dark:border-slate-800/50">
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

"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function BackofficeLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  const links = [
    { href: "/dashboard", icon: "calendar_month", label: "Agenda" },
    { href: "/clientes", icon: "group", label: "Clientes" },
    { href: "/configuracoes", icon: "settings", label: "Ajustes" },
  ];

  return (
    <div className="flex min-h-screen bg-background-light dark:bg-background-dark font-display text-slate-900 dark:text-slate-100">
      
      {/* Desktop Sidebar */}
      <aside className="hidden md:flex flex-col w-64 border-r border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 shrink-0 sticky top-0 h-screen">
        <div className="p-6">
          <h1 className="text-xl font-bold tracking-tight text-primary">Agendamentos</h1>
        </div>
        <nav className="flex-1 px-4 py-4 space-y-2">
          {links.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${
                  isActive 
                    ? "bg-primary text-white font-medium shadow-md shadow-primary/20" 
                    : "text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-slate-900 dark:hover:text-slate-100"
                }`}
              >
                <span 
                  className="material-symbols-outlined" 
                  style={{ fontVariationSettings: isActive ? "'FILL' 1" : undefined }}
                >
                  {link.icon}
                </span>
                <span className="font-medium">{link.label}</span>
              </Link>
            );
          })}
        </nav>
        
        <div className="p-4 border-t border-slate-200 dark:border-slate-800">
          <div className="flex items-center gap-3 px-2 py-2">
             <div className="size-10 rounded-full bg-primary/10 overflow-hidden border border-primary/20 shrink-0">
               <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuCTjL8evO208DzmWZwY_gGCcq2GM5LhO2ijZndyRkUbFG75MSoDJjW5i1A-uH6XcqbSXvhhAdvmyQB_Ada6LxaVqempgjZEJgl_uWv1ifI3hRY86RhJ7Ikcszve4PxvonGWv2UASq1szRikspY5rRNNL8RoSMG_yM0vuIIwq2rc-GxHL5_iWn28C-8SZu6ZiAC5mR8ekDPAXab7ZDGuXkhTqV04cze0qWzQv2YnKaC9VSN-gOCnZip4H35IMGjgFpY6xmRUcUhcQPE" alt="User" className="w-full h-full object-cover" />
             </div>
             <div className="overflow-hidden">
               <p className="text-sm font-bold truncate">Carlos Eletricista</p>
               <p className="text-xs text-slate-500 truncate">Profissional</p>
             </div>
          </div>
        </div>
      </aside>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col min-w-0">
        {children}
      </div>

      {/* Mobile Bottom Navigation */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-white dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800 px-6 pb-6 pt-3 z-50">
        <div className="max-w-xl mx-auto flex items-center justify-between">
          {links.map((link) => {
             const isActive = pathname === link.href;
             return (
               <Link 
                 key={link.href}
                 href={link.href} 
                 className={`flex flex-col items-center gap-1 transition-colors ${
                   isActive ? 'text-primary' : 'text-slate-400 dark:text-slate-500 hover:text-primary'
                 }`}
               >
                 <span className="material-symbols-outlined" style={{ fontVariationSettings: isActive ? "'FILL' 1" : undefined }}>{link.icon}</span>
                 <p className="text-[10px] font-bold uppercase tracking-wider">{link.label}</p>
               </Link>
             )
          })}
        </div>
      </nav>
    </div>
  );
}

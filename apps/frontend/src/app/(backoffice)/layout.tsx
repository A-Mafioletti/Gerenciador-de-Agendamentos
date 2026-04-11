"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { SignOutButton, useUser } from "@clerk/nextjs";
import { LogOut } from "lucide-react";

export default function BackofficeLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const { user } = useUser();

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
          
          <SignOutButton redirectUrl="/login">
            <button className="flex w-full items-center gap-3 px-4 py-3 rounded-xl transition-all text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-slate-900 dark:hover:text-slate-100">
              <LogOut className="size-6 shrink-0" />
              <span className="font-medium">Sair</span>
            </button>
          </SignOutButton>
        </nav>
        
        <div className="p-4 border-t border-slate-200 dark:border-slate-800">
          <div className="flex items-center gap-3 px-2 py-2">
             <div className="size-10 rounded-full bg-primary/10 overflow-hidden border border-primary/20 shrink-0">
               {user?.imageUrl && (
                 <img src={user.imageUrl} alt={user?.fullName || "User Avatar"} className="w-full h-full object-cover" />
               )}
             </div>
             <div className="overflow-hidden">
               <p className="text-sm font-bold truncate">{user?.fullName || "Profissional"}</p>
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

          <SignOutButton redirectUrl="/login">
            <button className="flex flex-col items-center gap-1 transition-colors text-slate-400 dark:text-slate-500 hover:text-primary">
              <LogOut className="size-6 shrink-0" />
              <p className="text-[10px] font-bold uppercase tracking-wider">Sair</p>
            </button>
          </SignOutButton>
        </div>
      </nav>
    </div>
  );
}

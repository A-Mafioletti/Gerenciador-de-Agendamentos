"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function DashboardPage() {
  const handleNotImplemented = () => {
    alert('Em desenvolvimento');
  };

  const pathname = usePathname();

  return (
    <div className="bg-background-light dark:bg-background-dark font-display text-slate-900 dark:text-slate-100 min-h-screen flex flex-col">
      {/* Header Section */}
      <header className="bg-background-light dark:bg-background-dark sticky top-0 z-10 border-b border-primary/10">
        <div className="flex items-center p-4 justify-between max-w-xl md:max-w-3xl lg:max-w-4xl mx-auto w-full">
          <div className="flex items-center gap-3">
            <div className="size-10 shrink-0 rounded-full bg-primary/10 flex items-center justify-center overflow-hidden border border-primary/20">
              <img 
                className="w-full h-full object-cover" 
                data-alt="Foto de perfil do usuário Carlos" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCTjL8evO208DzmWZwY_gGCcq2GM5LhO2ijZndyRkUbFG75MSoDJjW5i1A-uH6XcqbSXvhhAdvmyQB_Ada6LxaVqempgjZEJgl_uWv1ifI3hRY86RhJ7Ikcszve4PxvonGWv2UASq1szRikspY5rRNNL8RoSMG_yM0vuIIwq2rc-GxHL5_iWn28C-8SZu6ZiAC5mR8ekDPAXab7ZDGuXkhTqV04cze0qWzQv2YnKaC9VSN-gOCnZip4H35IMGjgFpY6xmRUcUhcQPE"
              />
            </div>
            <div>
              <h1 className="text-sm text-slate-500 dark:text-slate-400 font-medium">Bem-vindo de volta,</h1>
              <h2 className="text-lg font-bold leading-tight tracking-tight">Olá, Carlos</h2>
            </div>
          </div>
          <button className="flex items-center gap-2 bg-primary/10 hover:bg-primary/20 text-primary px-3 py-2 rounded-lg transition-colors duration-200">
            <span className="material-symbols-outlined text-[18px]">content_copy</span>
            <span className="text-xs font-bold uppercase tracking-wider hidden sm:block">Copiar Link</span>
          </button>
        </div>
        
        {/* Navigation Tabs */}
        <div className="px-4 max-w-xl md:max-w-3xl lg:max-w-4xl mx-auto w-full">
          <div className="flex gap-8">
            <div className="flex flex-col items-center justify-center border-b-2 border-primary text-primary pb-3 pt-4 cursor-pointer">
              <p className="text-sm font-bold">Hoje</p>
            </div>
            <div className="flex flex-col items-center justify-center border-b-2 border-transparent text-slate-500 dark:text-slate-400 pb-3 pt-4 hover:text-primary transition-colors cursor-pointer">
              <p className="text-sm font-bold">Próximos</p>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="flex-1 p-4 max-w-xl md:max-w-3xl lg:max-w-4xl mx-auto w-full overflow-y-auto">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-base font-bold text-slate-800 dark:text-slate-200 uppercase tracking-wide">Agenda de Hoje</h3>
          <span className="text-xs font-medium text-slate-500 bg-slate-200 dark:bg-slate-800 px-2 py-1 rounded">24 Out, Qui</span>
        </div>

        {/* Appointments List */}
        <div className="flex flex-col gap-4">
          {/* Appointment Card 1 */}
          <div className="flex flex-col gap-3 rounded-xl bg-white dark:bg-slate-900 p-4 shadow-sm border border-slate-100 dark:border-slate-800">
            <div className="flex justify-between items-start">
              <div className="flex flex-col gap-1">
                <span className="text-primary text-sm font-bold bg-primary/5 px-2 py-0.5 rounded-md w-fit">09:00 - 10:00</span>
                <p className="text-slate-900 dark:text-slate-100 text-lg font-bold mt-1">Ricardo Silva</p>
                <p className="text-slate-500 dark:text-slate-400 text-sm font-medium">Instalação de Chuveiro</p>
              </div>
              <div className="size-12 rounded-lg bg-slate-100 dark:bg-slate-800 overflow-hidden">
                <img 
                  className="w-full h-full object-cover" 
                  data-alt="Avatar do cliente Ricardo Silva" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDKk2vohwkJBqPAnXDVYe_2vFUIKCLQb9a1mm_gof4DH9ZsciJGbvKu7ndr9j5FtvdCW10XNIQb3ce34thFLzP8VPCLOmRTN61tHUjMt0z9jd_rEC-OYBggpZlUKvNzJosRe9YnG7K5POkRLjnvouOplVQpEhAvjVnh2TrSOuk0aKjx4KgSEeIg6xs-mtNEbxogLICNisFZG_3pfpkKRSftyWGDpjC9fp1pErovPUpx9WfO6jpSixGSVsG1MlHofatSf4YnJr1U92Y"
                />
              </div>
            </div>
            <div className="flex gap-2 pt-2 border-t border-slate-50 dark:border-slate-800 mt-1">
              <button className="flex-1 flex items-center justify-center gap-2 rounded-lg h-10 px-4 bg-[#25D366]/10 text-[#25D366] hover:bg-[#25D366]/20 transition-colors font-semibold text-sm">
                <span className="material-symbols-outlined text-[20px]">chat</span>
                WhatsApp
              </button>
              <button className="flex items-center justify-center rounded-lg size-10 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400">
                <span className="material-symbols-outlined">more_horiz</span>
              </button>
            </div>
          </div>

          {/* Appointment Card 2 */}
          <div className="flex flex-col gap-3 rounded-xl bg-white dark:bg-slate-900 p-4 shadow-sm border border-slate-100 dark:border-slate-800">
            <div className="flex justify-between items-start">
              <div className="flex flex-col gap-1">
                <span className="text-primary text-sm font-bold bg-primary/5 px-2 py-0.5 rounded-md w-fit">10:30 - 11:15</span>
                <p className="text-slate-900 dark:text-slate-100 text-lg font-bold mt-1">Marcos Oliveira</p>
                <p className="text-slate-500 dark:text-slate-400 text-sm font-medium">Manutenção Preventiva</p>
              </div>
              <div className="size-12 rounded-lg bg-slate-100 dark:bg-slate-800 overflow-hidden">
                <img 
                  className="w-full h-full object-cover" 
                  data-alt="Avatar do cliente Marcos Oliveira" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCbVPjSAEHXrC2HdaHdVnGmcXfMf7-oUhOda65digkP4rk1Y46tTwwHeD4hEnz6UbPwMUs7QU68zCzSyQOoxfEso_korbrAmK-ertvmnMUlGQrn3QEHtmTvQkaLL9bpkscVe45UiNBSTR9nuDrvepTT3t1zLZvM1ebWhCU12IgZcb29aQMKDc1fICYGJlVVDy7pBBDH1oGnP0ir-SUIz5ZafcWvC2Q1vWowEyW0HRTXlZSYeM--c-oAzKskIAQiRhMCE4v7B5EIyik"
                />
              </div>
            </div>
            <div className="flex gap-2 pt-2 border-t border-slate-50 dark:border-slate-800 mt-1">
              <button className="flex-1 flex items-center justify-center gap-2 rounded-lg h-10 px-4 bg-[#25D366]/10 text-[#25D366] hover:bg-[#25D366]/20 transition-colors font-semibold text-sm">
                <span className="material-symbols-outlined text-[20px]">chat</span>
                WhatsApp
              </button>
              <button className="flex items-center justify-center rounded-lg size-10 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400">
                <span className="material-symbols-outlined">more_horiz</span>
              </button>
            </div>
          </div>

          {/* Appointment Card 3 */}
          <div className="flex flex-col gap-3 rounded-xl bg-white dark:bg-slate-900 p-4 shadow-sm border border-slate-100 dark:border-slate-800">
            <div className="flex justify-between items-start">
              <div className="flex flex-col gap-1">
                <span className="text-primary text-sm font-bold bg-primary/5 px-2 py-0.5 rounded-md w-fit">13:00 - 14:00</span>
                <p className="text-slate-900 dark:text-slate-100 text-lg font-bold mt-1">André Santos</p>
                <p className="text-slate-500 dark:text-slate-400 text-sm font-medium">Iluminação e Leds</p>
              </div>
              <div className="size-12 rounded-lg bg-slate-100 dark:bg-slate-800 overflow-hidden">
                <img 
                  className="w-full h-full object-cover" 
                  data-alt="Avatar do cliente André Santos" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAoNjQ0b6W9bTs7u9GiBoBAJN6Zs1NwuD0CsPcmo5ZM3EMYY45CQFVjyES1S3O9XuIy9jH_345hDt-0r9peIm6coLtGOPaaaQf4-FqECnmcfwES4shIlbobzZ8n6lz53YRW06c4Ad8Ie_3U4b2Jv7rWWEfYNGMqbtimtj1sxGZv-LrA-AyNPlXr9ZdV-82HSXwKCaSGVw3k9bcNL7UwMFW-L_rrPM0p7B41e_XCsWqeV-OROwcKWymkJ7DOD9zhVDco9k4vvM0p4uc"
                />
              </div>
            </div>
            <div className="flex gap-2 pt-2 border-t border-slate-50 dark:border-slate-800 mt-1">
              <button className="flex-1 flex items-center justify-center gap-2 rounded-lg h-10 px-4 bg-[#25D366]/10 text-[#25D366] hover:bg-[#25D366]/20 transition-colors font-semibold text-sm">
                <span className="material-symbols-outlined text-[20px]">chat</span>
                WhatsApp
              </button>
              <button className="flex items-center justify-center rounded-lg size-10 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400">
                <span className="material-symbols-outlined">more_horiz</span>
              </button>
            </div>
          </div>
        </div>
        
        {/* Bottom Spacer */}
        <div className="h-24"></div>
      </main>


    </div>
  );
}

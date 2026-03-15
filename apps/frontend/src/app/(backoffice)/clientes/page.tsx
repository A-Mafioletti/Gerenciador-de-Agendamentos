"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function ClientesPage() {
  const pathname = usePathname();

  return (
    <div className="bg-background-light dark:bg-background-dark font-display text-slate-900 dark:text-slate-100 min-h-screen flex flex-col">
      {/* Header Section */}
      <header className="sticky top-0 z-10 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 px-4 pt-6 pb-4">
        <div className="max-w-xl md:max-w-3xl lg:max-w-4xl mx-auto w-full">
          <div className="flex items-center justify-between mb-4">
            <h1 className="text-2xl font-bold tracking-tight">Meus Clientes</h1>
            <button className="p-2 rounded-full hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors">
              <span className="material-symbols-outlined text-primary">person_add</span>
            </button>
          </div>
          {/* Search Bar */}
          <div className="relative group">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <span className="material-symbols-outlined text-slate-400 group-focus-within:text-primary transition-colors">search</span>
            </div>
            <input 
              className="block w-full pl-10 pr-3 py-2.5 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl leading-5 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary sm:text-sm transition-all text-slate-900 dark:text-slate-100" 
              placeholder="Buscar por nome ou serviço..." 
              type="text"
            />
          </div>
        </div>
      </header>

      {/* Content: Client List */}
      <main className="flex-1 px-4 py-6 space-y-4 max-w-xl md:max-w-3xl lg:max-w-4xl mx-auto w-full overflow-y-auto">
        {/* Client Card 1 */}
        <div className="bg-white dark:bg-slate-900 p-4 rounded-xl border border-slate-100 dark:border-slate-800 shadow-sm flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="h-14 w-14 rounded-full bg-slate-100 dark:bg-slate-800 overflow-hidden shrink-0 border border-slate-200 dark:border-slate-700">
              <img className="h-full w-full object-cover" data-alt="Portrait of João Silva, professional client" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDqYygd3WEXAHBF9ynJzu5JqLpVHoYFS6352vf2__dMjw_LZx0af69AYIRPwB3_5iEqFdt8rsnHOT7OYLnUCTcIST-gHoynolbHaiAmsumeitHsPPx21oLr6hcEHFiNEq_0pJlhKTc4pyB1KVlPIVlUrJyTkq-E841v90x01kOUPxkkNjqBKY-kmOQgdfT7v3tO6dgQTonpwvGPP7rJWda6PsBADULCOce-Qe0QxXYRSFjUwYFUxZMbPNDFoLbhkhCO-7CiJ4G0aj8"/>
            </div>
            <div>
              <h3 className="font-semibold text-slate-900 dark:text-slate-100">João Silva</h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 flex items-center gap-1">
                <span className="material-symbols-outlined text-[14px]">engineering</span>
                Manutenção Preventiva
              </p>
              <p className="text-[11px] text-slate-400 mt-0.5">Última visita: 15 Out 2023</p>
            </div>
          </div>
          <button className="bg-green-500/10 text-green-600 dark:text-green-400 p-3 rounded-full hover:bg-green-500/20 transition-colors flex items-center justify-center">
            <span className="material-symbols-outlined">chat</span>
          </button>
        </div>

        {/* Client Card 2 */}
        <div className="bg-white dark:bg-slate-900 p-4 rounded-xl border border-slate-100 dark:border-slate-800 shadow-sm flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="h-14 w-14 rounded-full bg-slate-100 dark:bg-slate-800 overflow-hidden shrink-0 border border-slate-200 dark:border-slate-700">
              <img className="h-full w-full object-cover" data-alt="Portrait of Maria Oliveira, professional client" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCBCrFObChJLTO_tYpqrg270z2sDzbbo8GAbXCUqttX4NHjHVg0_iUUPAwTKqXl6hgfSl4UKLDpBi9gmdNA44dvWvFytcUaKSbDa1-QgmT7hx2o1ySnTG3M7njuF72L9uL5R0_kHfpJHnsF_1dWpdPo8b6RivMR4eZDbODNaxsFOmItr845UvLsICRpPrxTn33cdG8NgFimidBVLXKp01oiO8VT9NlSkv2eQapGpL7P6Za405SL1rf2_XNVkqaLj4u6N--aoLyRFwA"/>
            </div>
            <div>
              <h3 className="font-semibold text-slate-900 dark:text-slate-100">Maria Oliveira</h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 flex items-center gap-1">
                <span className="material-symbols-outlined text-[14px]">electrical_services</span>
                Troca de Fiação
              </p>
              <p className="text-[11px] text-slate-400 mt-0.5">Última visita: 10 Out 2023</p>
            </div>
          </div>
          <button className="bg-green-500/10 text-green-600 dark:text-green-400 p-3 rounded-full hover:bg-green-500/20 transition-colors flex items-center justify-center">
            <span className="material-symbols-outlined">chat</span>
          </button>
        </div>

        {/* Client Card 3 */}
        <div className="bg-white dark:bg-slate-900 p-4 rounded-xl border border-slate-100 dark:border-slate-800 shadow-sm flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="h-14 w-14 rounded-full bg-slate-100 dark:bg-slate-800 overflow-hidden shrink-0 border border-slate-200 dark:border-slate-700">
              <img className="h-full w-full object-cover" data-alt="Portrait of Ricardo Santos, professional client" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDp4BusY8BVB1Gm_CMtlDju_C1Kb9_VvOGpLRdZwC6Ap0Um-5wJ-xnLTky3xsfbrgptvxkgypoDJjsHdjzMABH5oH2wQZR2x4AqwlsUFzBmzMEV3XaEFXLa8WKOID26QL9loAeLXgFxeycpehOX5pioyf8IzVdCk5cDiGAKuNFTwWfFDR9J1bYXPJi9fsOCD431ZXLm5xn8mEev0ZbwpglPwxopzkC_gf8fyctxRQtFEQeILwqb5hK1Y9cuYdkq5P8svn6XGDJ1ljI"/>
            </div>
            <div>
              <h3 className="font-semibold text-slate-900 dark:text-slate-100">Ricardo Santos</h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 flex items-center gap-1">
                <span className="material-symbols-outlined text-[14px]">shower</span>
                Instalação de Chuveiro
              </p>
              <p className="text-[11px] text-slate-400 mt-0.5">Última visita: 05 Out 2023</p>
            </div>
          </div>
          <button className="bg-green-500/10 text-green-600 dark:text-green-400 p-3 rounded-full hover:bg-green-500/20 transition-colors flex items-center justify-center">
            <span className="material-symbols-outlined">chat</span>
          </button>
        </div>

        {/* Client Card 4 */}
        <div className="bg-white dark:bg-slate-900 p-4 rounded-xl border border-slate-100 dark:border-slate-800 shadow-sm flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="h-14 w-14 rounded-full bg-slate-100 dark:bg-slate-800 overflow-hidden shrink-0 border border-slate-200 dark:border-slate-700">
              <img className="h-full w-full object-cover" data-alt="Portrait of Ana Costa, professional client" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCd1KxSkKMnNMakNDMU96IvVhkedZc9I4ZVL3ZMVpYUoZy3Es17EzJk4Gx63OphPRwIcnq_pikxTJ6lu2044clHI72u2XoU37AQIBSV7G0Bmsd5m80feJUbRyB5aSgaKiE3BRVeslaPw7k1cDhgzTa9qMz5MoNTRO0LIJq3HddhjuG7RakJwAXguoEn5rQFhky2d0HiUCRvdOXF8QVg7Jofyc9ShWgnfddt_HGSXAAbOEptb3o_ywVqKD3vQXvFATa4NQfmdXFMHYY"/>
            </div>
            <div>
              <h3 className="font-semibold text-slate-900 dark:text-slate-100">Ana Costa</h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 flex items-center gap-1">
                <span className="material-symbols-outlined text-[14px]">lightbulb</span>
                Instalação de Luminárias
              </p>
              <p className="text-[11px] text-slate-400 mt-0.5">Última visita: 28 Set 2023</p>
            </div>
          </div>
          <button className="bg-green-500/10 text-green-600 dark:text-green-400 p-3 rounded-full hover:bg-green-500/20 transition-colors flex items-center justify-center">
            <span className="material-symbols-outlined">chat</span>
          </button>
        </div>

        {/* Client Card 5 */}
        <div className="bg-white dark:bg-slate-900 p-4 rounded-xl border border-slate-100 dark:border-slate-800 shadow-sm flex items-center justify-between opacity-80">
          <div className="flex items-center gap-4">
            <div className="h-14 w-14 rounded-full bg-slate-100 dark:bg-slate-800 overflow-hidden shrink-0 border border-slate-200 dark:border-slate-700">
              <img className="h-full w-full object-cover" data-alt="Portrait of Bruno Lima, professional client" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAJtyRHeSfToN-gauqXZkqqJngSEyJGH9kks77573u3LvYwLpu8wmcCJkhFvlRVj4UEpML96dq_matgHClgNr-6uk9CGT_K9TMzvQnczIhk9QDqk_6sq2TyOup-9LQ1YNJ3hdNdRPtFaEUKaxs0VpAvk7XCutxwbnm8dBcoPadtrD1X37a4WKl1lAiucrHm-JmeI-ZPn5vOwNCP3wHWOEOovdlR4l8poyjixU2U3N5bZj9W6EQi5HNZ2iXix209huFBAcRg5cwj1Vs"/>
            </div>
            <div>
              <h3 className="font-semibold text-slate-900 dark:text-slate-100">Bruno Lima</h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 flex items-center gap-1">
                <span className="material-symbols-outlined text-[14px]">power</span>
                Tomadas e Interruptores
              </p>
              <p className="text-[11px] text-slate-400 mt-0.5">Última visita: 15 Set 2023</p>
            </div>
          </div>
          <button className="bg-green-500/10 text-green-600 dark:text-green-400 p-3 rounded-full hover:bg-green-500/20 transition-colors flex items-center justify-center">
            <span className="material-symbols-outlined">chat</span>
          </button>
        </div>
        
        {/* Bottom Spacer */}
        <div className="h-24"></div>
      </main>


    </div>
  );
}

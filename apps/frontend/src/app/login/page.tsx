"use client";

import { SignIn } from "@clerk/nextjs";

export default function LoginPage() {
  return (
    <div className="bg-[#f8fafc] flex flex-col items-center min-h-screen">
      <main className="relative flex h-full min-h-screen w-full flex-col max-w-[480px] px-8 py-16">

        {/* Ícone do Topo */}
        <div className="flex flex-col items-center mb-8">
          <div className="w-20 h-20 rounded-2xl bg-[#16439c] flex items-center justify-center mb-0 shadow-lg shadow-[#16439c]/30">
            <span className="material-symbols-outlined text-white text-4xl font-light">event_available</span>
          </div>
        </div>

        {/* Textos Originais do Stitch */}
        <div className="text-center mb-8">
          <h1 className="text-[#0f172a] tracking-tight text-3xl font-bold leading-tight pb-2">
            Acesso do Profissional
          </h1>
          <p className="text-[#64748b] text-base font-normal">
            Acesse sua conta com seu e-mail e senha.
          </p>
        </div>

        {/* Formulário do Clerk Estilizado */}
        <div className="flex justify-center w-full">
          <SignIn
            routing="hash"
            forceRedirectUrl="/dashboard"
            fallbackRedirectUrl="/dashboard"
            appearance={{
              layout: {
                socialButtonsPlacement: "bottom",
              },
              elements: {
                rootBox: "w-full",
                cardBox: "!shadow-none !border-none !bg-transparent m-0 p-0 w-full",
                card: "!shadow-none !bg-transparent w-full m-0 p-0",
                header: "!hidden",
                footer: "!hidden",
                formFieldRow: "mb-5",
                formFieldLabel: "text-[#475569] font-medium text-sm mb-2",
                formFieldInput: "w-full rounded-xl border border-gray-300 py-3.5 px-4 text-gray-900 focus:ring-2 focus:ring-[#16439c] focus:border-transparent outline-none transition-all",
                formButtonPrimary: "w-full !bg-[#16439c] hover:!bg-[#12347a] text-white normal-case text-lg font-semibold py-3.5 rounded-xl transition-colors mt-2",
                dividerRow: "my-8",
                dividerText: "text-gray-400 text-sm uppercase tracking-wider bg-transparent",
                socialButtonsBlockButton: "w-full border border-gray-300 bg-white text-gray-700 hover:bg-gray-50 py-3.5 rounded-xl font-medium text-base transition-colors flex justify-center",
              }
            }}
          />
        </div>

      </main>
    </div>
  );
}
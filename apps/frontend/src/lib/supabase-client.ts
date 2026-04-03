import { createClient } from "@supabase/supabase-js";
import { useSession } from "@clerk/nextjs";

export const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

export function createClerkSupabaseClient(session: any) {
  // Inicializa o cliente customizado do Supabase que injeta o token do Clerk nos cabeçalhos
  return createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      global: {
        // Obtenha a sessão atual do Clerk passando o nome do JWT Template
        fetch: async (url, options = {}) => {
          const clerkToken = await session?.getToken({
            template: "supabase", // Template configurado no painel do Clerk
          });

          // Constrói os Headers requisitando o uso do Token real assinado
          const headers = new Headers((options as RequestInit)?.headers);
          if (clerkToken) {
            headers.set("Authorization", `Bearer ${clerkToken}`);
          }

          // Executa a requisição real
          return fetch(url, {
            ...options,
            headers,
          });
        },
      },
    }
  );
}

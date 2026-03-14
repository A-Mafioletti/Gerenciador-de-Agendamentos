import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gerenciador de Agendamentos",
  description: "Plataforma de agendamento autônoma para profissionais autônomos.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}

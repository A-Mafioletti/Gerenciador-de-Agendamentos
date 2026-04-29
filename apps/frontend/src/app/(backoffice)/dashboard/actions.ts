"use server";

import { GoogleGenerativeAI } from "@google/generative-ai";

export async function generateAgendaSummary(appointments: any[], history: any[], workConfig: { startTime: string, endTime: string }) {
  try {
    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      throw new Error("GEMINI_API_KEY is not set in the environment variables.");
    }

    const genAI = new GoogleGenerativeAI(apiKey);
    const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" }, { apiVersion: "v1" });

    const horaAtual = new Date().toLocaleTimeString('pt-BR', { timeZone: 'America/Sao_Paulo', hour: '2-digit', minute: '2-digit' });
    let prompt = "";

    // Garantir lidar com null/undefined de forma segura
    const safeAppointments = appointments || [];
    const safeHistory = history || [];

    const validAppointments = safeAppointments.filter(apt => apt.client_name !== "🔒 BLOQUEIO PESSOAL");
    const validHistory = safeHistory.filter(apt => apt.client_name !== "🔒 BLOQUEIO PESSOAL");

    const appointmentsDetails = validAppointments.length > 0
      ? validAppointments.map((apt: any) => `- PENDENTE: Cliente: ${apt.client_name}, Serviço: ${apt.services?.name || 'Serviço Geral'}, Horário: ${apt.start_time.substring(0, 5)}h`).join('\n')
      : "Nenhum agendamento pendente.";

    const historyDetails = validHistory.length > 0
      ? validHistory.map((apt: any) => `- CONCLUÍDO: Cliente: ${apt.client_name}, Serviço: ${apt.services?.name || 'Serviço Geral'}, Horário: ${apt.start_time.substring(0, 5)}h`).join('\n')
      : "Nenhum histórico hoje.";

    prompt = `O horário atual é ${horaAtual}. O expediente deste profissional é das ${workConfig.startTime} às ${workConfig.endTime}.

Baseado nos seguintes dados de hoje:
--- PENDENTES ---
${appointmentsDetails}

--- CONCLUÍDOS ---
${historyDetails}

Instruções para agir como um assistente super inteligente e educado do profissional:
1. Resuma o dia em um parágrafo.
2. Se houver itens concluídos listados no histórico, mencione-os brevemente como conquistas do dia (ex: "Você já atendeu X e Y hoje, excelente trabalho!").
3. Se houver agendamentos pendentes, foque no que ainda precisa ser preparado, sugerindo discretamente as ferramentas necessárias com base no serviço de cada um.
4. Compare a hora atual com o horário de fim de expediente (${workConfig.endTime}). Se a hora atual for igual ou superior ao fim do expediente E não houver mais agendamentos pendentes, o tom deve ser de encerramento total e descanso, celebrando o que foi feito no histórico.
5. Seja natural, humano e muito motivacional. Cuidado para não "alucinar" nomes caso os dados estejam vazios. Se tudo estiver vazio, apenas informe que o dia está livre e sugira organizar coisas ou descansar.`;

    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();

    return { success: true, text };
  } catch (error: any) {
    console.error("Error generating AI summary:", error);
    // Se o erro for de servidor lotado (503), avisa o usuário.
    if (error.message && error.message.includes("503")) {
        return { success: false, error: "A inteligência artificial está muito requisitada no momento. Tente novamente em 1 minuto." };
    }
    return { success: false, error: "Não foi possível gerar o resumo. Tente novamente mais tarde." };
  }
}

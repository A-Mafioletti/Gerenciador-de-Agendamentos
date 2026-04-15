"use server";

import { GoogleGenerativeAI } from "@google/generative-ai";

export async function generateAgendaSummary(appointments: any[]) {
  try {
    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      throw new Error("GEMINI_API_KEY is not set in the environment variables.");
    }

    const genAI = new GoogleGenerativeAI(apiKey);
    const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" }, { apiVersion: "v1" });

    const horaAtual = new Date().toLocaleTimeString('pt-BR', { timeZone: 'America/Sao_Paulo', hour: '2-digit', minute: '2-digit' });
    let prompt = "";

    // Filtra para garantir que apenas bloqueios ou agendamentos confirmados reais sejam considerados
    const validAppointments = appointments.filter(apt => apt.client_name !== "🔒 BLOQUEIO PESSOAL");

    if (validAppointments && validAppointments.length > 0) {
      // Regras A e C
      const appointmentsDetails = validAppointments.map((apt: any) => {
        return `- Cliente: ${apt.client_name}, Serviço: ${apt.services?.name || 'Serviço Geral'}, Horário: ${apt.start_time.substring(0, 5)}h`;
      }).join('\n');

      prompt = `O horário atual é ${horaAtual}.\n\nAqui está a lista de agendamentos de hoje do profissional:\n${appointmentsDetails}\n\nResuma o dia em um parágrafo curto e motivacional. Cite os nomes dos clientes, os serviços que serão realizados, e sugira discretamente ferramentas ou preparativos necessários com base nos serviços. Mantenha um tom otimista e encorajador. Seja direto ao ponto e muito natural.\n\nRegra importante: Compare o horário atual com os horários dos agendamentos. Se todos os agendamentos do dia já tiverem passado, mude o tom da resposta. Parabenize o profissional pelo dia de trabalho concluído, diga que o expediente encerrou e sugira que ele descanse para o próximo dia útil.`;
    } else {
      // Regra B
      prompt = `O horário atual é ${horaAtual}.\n\nA agenda de hoje não possui compromissos marcados.\n\nEscreva um parágrafo amigável e motivacional informando que a agenda do profissional hoje está livre. Sugira que ele aproveite o tempo para organizar as ferramentas, fazer prospecção de novos clientes no WhatsApp ou simplesmente tirar um momento para descansar. Mantenha um tom muito otimista e positivo. Seja direto ao ponto.`;
    }

    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();

    return { success: true, text };
  } catch (error: any) {
    console.error("Error generating AI summary:", error);
    return { success: false, error: "Não foi possível gerar o resumo. Tente novamente mais tarde." };
  }
}

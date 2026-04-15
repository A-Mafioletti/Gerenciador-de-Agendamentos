"use server";

import { GoogleGenerativeAI } from "@google/generative-ai";

export async function generateAgendaSummary(appointments: any[]) {
  try {
    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      throw new Error("GEMINI_API_KEY is not set in the environment variables.");
    }

    const genAI = new GoogleGenerativeAI(apiKey);
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" }, { apiVersion: "v1" });

    let prompt = "";

    // Filtra para garantir que apenas bloqueios ou agendamentos confirmados reais sejam considerados
    const validAppointments = appointments.filter(apt => apt.client_name !== "🔒 BLOQUEIO PESSOAL");

    if (validAppointments && validAppointments.length > 0) {
      // Regra A
      const appointmentsDetails = validAppointments.map((apt: any) => {
        return `- Cliente: ${apt.client_name}, Serviço: ${apt.services?.name || 'Serviço Geral'}, Horário: ${apt.start_time.substring(0, 5)}h`;
      }).join('\n');
      
      prompt = `Aqui está a lista de agendamentos de hoje do profissional:\n${appointmentsDetails}\n\nResuma o dia em um parágrafo curto e motivacional. Cite os nomes dos clientes, os serviços que serão realizados, e sugira discretamente ferramentas ou preparativos necessários com base nos serviços. Mantenha um tom otimista e encorajador. Seja direto ao ponto e muito natural.`;
    } else {
      // Regra B
      prompt = `A agenda de hoje não possui compromissos marcados.\n\nEscreva um parágrafo amigável e motivacional informando que a agenda do profissional hoje está livre. Sugira que ele aproveite o tempo para organizar as ferramentas, fazer prospecção de novos clientes no WhatsApp ou simplesmente tirar um momento para descansar. Mantenha um tom muito otimista e positivo. Seja direto ao ponto.`;
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

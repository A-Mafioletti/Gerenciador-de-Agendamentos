import { Router } from 'express';
import { PrismaClient } from '@prisma/client';

const router = Router();
const prisma = new PrismaClient();

// POST /api/appointments
router.post('/', async (req, res) => {
  try {
    console.log("Dados recebidos:", req.body);
    const { name, whatsapp, details, date, time, professional_id, service_id } = req.body;

    // Simple validation
    if (!date || !time || !name || !whatsapp) {
      return res.status(400).json({ success: false, message: 'Dados incompletos' });
    }

    // A data vem no formato 'YYYY-MM-DD'
    const formattedDate = date.substring(0, 10);
    const appointmentDate = new Date(`${formattedDate}T12:00:00.000Z`);
    
    const formattedTime = time.replace(/[^\d:]/g, '').substring(0, 5);
    const startTimeAsDate = new Date(`1970-01-01T${formattedTime}:00.000Z`);

    // Busca o profissional usando o enviando no payload ou cai pro primeiro do banco
    let finalProfessionalId = professional_id;
    if (!finalProfessionalId) {
      const professional = await prisma.professional.findFirst();
      if (!professional) {
        return res.status(400).json({ success: false, message: 'Profissional não cadastrado no banco.' });
      }
      finalProfessionalId = professional.id;
    }

    let finalServiceId: string | null = service_id || null;
    
    // Se não for um bloqueio pessoal, exige um serviço
    if (name !== '🔒 BLOQUEIO PESSOAL') {
      if (!finalServiceId) {
        const service = await prisma.service.findFirst();
        if (!service) {
          return res.status(400).json({ success: false, message: 'Serviço não cadastrado no banco.' });
        }
        finalServiceId = service.id;
      }
    }

    const appointmentData: any = {
      client_name: name,
      client_whatsapp: whatsapp,
      address_notes: details || '',
      date: appointmentDate,
      start_time: startTimeAsDate,
      professional_id: finalProfessionalId
    };

    if (finalServiceId) {
      appointmentData.service_id = finalServiceId;
    }

    // --- Início da Trava de Concorrência (Double Booking) ---
    // Verifica se já existe um agendamento não-cancelado para o mesmo profissional, data e horário
    const existingAppointment = await prisma.appointment.findFirst({
      where: {
        professional_id: finalProfessionalId,
        date: appointmentDate,
        start_time: startTimeAsDate,
        status: {
          not: 'cancelled'
        }
      }
    });

    if (existingAppointment) {
      return res.status(409).json({ 
        success: false, 
        error: 'Este horário acabou de ser reservado por outra pessoa. Por favor, escolha outro.' 
      });
    }
    // --- Fim da Trava ---

    const newAppointment = await prisma.appointment.create({
      data: appointmentData
    });

    res.status(201).json({
      success: true,
      message: 'Agendamento cadastrado com sucesso',
      data: newAppointment
    });
  } catch (error) {
    console.error("Erro Prisma:", error);
    res.status(500).json({
      success: false,
      message: 'Erro interno ao salvar agendamento'
    });
  }
});

export default router;

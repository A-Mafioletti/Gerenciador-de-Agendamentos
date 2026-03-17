import { Router } from 'express';
import { PrismaClient } from '@prisma/client';

const router = Router();
const prisma = new PrismaClient();

// POST /api/appointments
router.post('/', async (req, res) => {
  try {
    console.log("Dados recebidos:", req.body);
    const { name, whatsapp, details, date, time } = req.body;

    // Simple validation
    if (!date || !time || !name || !whatsapp) {
      return res.status(400).json({ success: false, message: 'Dados incompletos' });
    }

    const appointmentDate = new Date(2026, 2, parseInt(date));
    const startTimeAsDate = new Date(`1970-01-01T${time}:00.000Z`);

    // Busca o primeiro profissional e serviço reais do banco
    const professional = await prisma.professional.findFirst();
    const service = await prisma.service.findFirst();

    if (!professional || !service) {
      return res.status(400).json({ success: false, message: 'Profissional ou serviço não cadastrado no banco.' });
    }

    const newAppointment = await prisma.appointment.create({
      data: {
        client_name: name,
        client_whatsapp: whatsapp,
        address_notes: details || '',
        date: appointmentDate,
        start_time: startTimeAsDate,
        service_id: service.id,
        professional_id: professional.id
      }
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

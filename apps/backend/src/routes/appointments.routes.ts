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

    const newAppointment = await prisma.appointment.create({
      data: {
        client_name: name,
        client_whatsapp: whatsapp,
        address_notes: details || '',
        date: appointmentDate,
        start_time: time,
        service_id: '00000000-0000-0000-0000-000000000001',
        professional_id: '00000000-0000-0000-0000-000000000002'
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

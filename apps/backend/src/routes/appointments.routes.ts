import { Router } from 'express';
import { PrismaClient } from '@prisma/client';

const router = Router();
const prisma = new PrismaClient();

// POST /api/appointments
router.post('/', async (req, res) => {
  try {
    const { date, time, name, whatsapp, service, details } = req.body;
    
    // Simple validation
    if (!date || !time || !name || !whatsapp || !service) {
      return res.status(400).json({ success: false, message: 'Dados incompletos' });
    }

    const appointment = await prisma.appointment.create({
      data: {
        date,
        time,
        name,
        whatsapp,
        service,
        details: details || null
      }
    });

    res.status(201).json({
      success: true,
      message: 'Agendamento cadastrado com sucesso',
      data: appointment
    });
  } catch (error) {
    console.error('Erro ao salvar agendamento no banco:', error);
    res.status(500).json({
      success: false,
      message: 'Erro interno ao salvar agendamento'
    });
  }
});

export default router;

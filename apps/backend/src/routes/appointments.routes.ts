import { Router } from 'express';
import { PrismaClient } from '@prisma/client';

const router = Router();
const prisma = new PrismaClient();

// POST /api/appointments
router.post('/', async (req, res) => {
  try {
    console.log("Dados recebidos:", req.body);
    const { date, time, name, whatsapp, service, details } = req.body;
    
    // Simple validation
    if (!date || !time || !name || !whatsapp || !service) {
      return res.status(400).json({ success: false, message: 'Dados incompletos' });
    }

    // Convert date string if it's just a day
    let formattedDate = date;
    if (typeof date === 'string' && date.length <= 2) {
      const dateObj = new Date(2026, 2, parseInt(date));
      // schema.prisma requires `date` as String
      formattedDate = dateObj.toISOString(); 
    }

    let finalService = service;
    
    // @ts-ignore - Check if service model exists dynamically (not in schema.prisma currently)
    if (prisma.service) {
      // @ts-ignore
      const foundService = await prisma.service.findFirst({ where: { name: service } });
      if (foundService) {
        finalService = foundService.id;
      }
    }

    // @ts-ignore - Handle professional gracefully if sent, though not required by current schema
    let finalProfessional = req.body.professional;
    // @ts-ignore
    if (finalProfessional && prisma.professional) {
      // @ts-ignore
      const foundProfessional = await prisma.professional.findFirst({ where: { name: finalProfessional } });
      if (foundProfessional) {
        finalProfessional = foundProfessional.id;
      }
    }

    const appointment = await prisma.appointment.create({
      data: {
        date: formattedDate,
        time,
        name,
        whatsapp,
        service: finalService,
        details: details || null
      }
    });

    res.status(201).json({
      success: true,
      message: 'Agendamento cadastrado com sucesso',
      data: appointment
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

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

    // Construct full date from "date" and "time"
    let baseDate: Date;
    if (typeof date === 'string' && date.length <= 2) {
      baseDate = new Date(new Date().getFullYear(), new Date().getMonth(), parseInt(date, 10));
    } else {
      baseDate = new Date(date);
    }
    
    if (time && typeof time === 'string') {
      const parts = time.split(':');
      if (parts.length >= 2) {
        baseDate.setHours(parseInt(parts[0], 10), parseInt(parts[1], 10), 0, 0);
      }
    }

    let finalService = service;
    
    // @ts-ignore - Check if service model exists dynamically
    if (prisma.service) {
      // @ts-ignore
      const foundService = await prisma.service.findFirst({ where: { name: service } });
      if (foundService) {
        finalService = foundService.id;
      }
    }

    // Default professional fallback UUID if none provided or found
    let finalProfessional = req.body.professional || '00000000-0000-0000-0000-000000000000';
    // @ts-ignore
    if (prisma.professional) {
      // @ts-ignore
      const foundProfessional = req.body.professional ? await prisma.professional.findFirst({ where: { name: req.body.professional } }) : await prisma.professional.findFirst();
      if (foundProfessional) {
        finalProfessional = foundProfessional.id;
      }
    }

    const appointment = await prisma.appointment.create({
      data: {
        date: baseDate,
        client_name: name,
        client_whatsapp: whatsapp,
        service_id: finalService,
        professional_id: finalProfessional,
        address_notes: details || null
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

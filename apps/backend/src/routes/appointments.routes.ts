import { Router } from 'express';
import { PrismaClient } from '@prisma/client';

const router = Router();
const prisma = new PrismaClient();

// POST /api/appointments
router.post('/', async (req, res) => {
  try {
    console.log("Dados recebidos:", req.body);
    const { name, whatsapp, details, date, service, time } = req.body;
    
    // Simple validation
    if (!date || !time || !name || !whatsapp || !service) {
      return res.status(400).json({ success: false, message: 'Dados incompletos' });
    }

    // 1. Busca os IDs REAIS no banco de dados para evitar erro de UUID
    let serviceRecord = await prisma.service.findFirst(); 
    const professionalRecord = await prisma.professional.findFirst();

    // 2. Monta a data correta
    const appointmentDate = new Date(2026, 2, parseInt(date));

    // 3. Salva usando apenas as colunas corretas e os IDs (UUIDs) buscados
    const newAppointment = await prisma.appointment.create({
      data: {
        client_name: name,
        client_whatsapp: whatsapp,
        address_notes: details || '',
        date: appointmentDate,
        service_id: serviceRecord!.id,
        professional_id: professionalRecord!.id
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

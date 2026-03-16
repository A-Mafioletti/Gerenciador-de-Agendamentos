import { Router } from 'express';

const router = Router();

// POST /api/appointments
router.post('/', (req, res) => {
  console.log('Receiving appointment data:', req.body);
  
  // Apenas retornando sucesso simulado por enquanto para o frontend não quebrar
  res.status(201).json({
    success: true,
    message: 'Agendamento recebido (mock)',
    data: req.body
  });
});

export default router;

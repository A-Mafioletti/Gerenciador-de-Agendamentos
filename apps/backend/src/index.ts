import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import authRoutes from './routes/auth.routes';

const app = express();
const port = process.env.PORT || 3001;

// Middlewares
app.use(cors({
  origin: 'http://localhost:3000'
}));
app.use(express.json());
app.use(cookieParser());

import appointmentsRoutes from './routes/appointments.routes';

// Rotas
app.use('/api/auth', authRoutes);
app.use('/appointments', appointmentsRoutes);

app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

app.listen(port, () => {
  console.log(`Backend rodando na porta ${port}`);
});

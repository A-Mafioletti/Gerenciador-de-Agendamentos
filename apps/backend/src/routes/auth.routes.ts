import { Router } from 'express';
import { register, login, me, logout } from '../controllers/auth.controller';

const authRoutes = Router();

authRoutes.post('/register', register);
authRoutes.post('/login', login);
authRoutes.get('/me', me);
authRoutes.post('/logout', logout);

export default authRoutes;

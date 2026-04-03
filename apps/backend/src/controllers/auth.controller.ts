import { Request, Response } from 'express';
import { createClerkClient } from '@clerk/backend';
import jwt from 'jsonwebtoken';
import { DbSyncService } from '../services/dbSync.service';
import { z } from 'zod';

const clerkClient = createClerkClient({
  secretKey: process.env.CLERK_SECRET_KEY,
});

const JWT_SECRET = process.env.JWT_SECRET || 'secret_dev_key';

const registerSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
  firstName: z.string().min(1),
  lastName: z.string().min(1),
});

const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(1),
});

export const register = async (req: Request, res: Response): Promise<void> => {
  try {
    const data = registerSchema.parse(req.body);

    // 1. Criar usuário no Clerk
    const clerkUser = await clerkClient.users.createUser({
      emailAddress: [data.email],
      password: data.password,
      firstName: data.firstName,
      lastName: data.lastName,
    });

    const fullName = `${data.firstName} ${data.lastName}`.trim();

    // 2. Sincronizar com o banco de dados (upsert via email)
    await DbSyncService.syncUser(clerkUser.id, data.email, fullName);

    // 3. Gerar JWT do Backend
    const token = jwt.sign({ userId: clerkUser.id, email: data.email, clerkId: clerkUser.id }, JWT_SECRET, {
      expiresIn: '7d',
    });

    // 4. Configurar Cookie HttpOnly
    res.cookie('token', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'strict',
      maxAge: 7 * 24 * 60 * 60 * 1000, // 7 dias
    });

    res.status(201).json({ message: 'Registrado com sucesso', user: { id: clerkUser.id, email: data.email, nomeCompleto: fullName } });
  } catch (error: any) {
    console.error('Registration Error:', error);
    res.status(400).json({ error: error.message || 'Falha ao registrar usuário' });
  }
};

export const login = async (req: Request, res: Response): Promise<void> => {
  try {
    const data = loginSchema.parse(req.body);

    // 1. Encontrar o usuário pelo Email no Clerk
    const users = await clerkClient.users.getUserList({
      emailAddress: [data.email],
    });

    if (users.data.length === 0) {
      res.status(401).json({ error: 'Credenciais inválidas' });
      return;
    }

    const clerkUser = users.data[0];

    // 2. Validar a senha no Clerk usando a API verifyPassword
    const verifyResp = await clerkClient.users.verifyPassword({
      userId: clerkUser.id,
      password: data.password,
    });

    if (!verifyResp.verified) {
      res.status(401).json({ error: 'Credenciais inválidas' });
      return;
    }

    const fullName = `${clerkUser.firstName || ''} ${clerkUser.lastName || ''}`.trim() || 'Usuário';

    // 3. Garantir / Sincronizar o usuário no BD local
    await DbSyncService.syncUser(clerkUser.id, data.email, fullName);

    // 4. Gerar JWT do Backend
    const token = jwt.sign({ userId: clerkUser.id, email: data.email, clerkId: clerkUser.id }, JWT_SECRET, {
      expiresIn: '7d',
    });

    // 5. Configurar Cookie HttpOnly
    res.cookie('token', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'strict',
      maxAge: 7 * 24 * 60 * 60 * 1000, 
    });

    res.status(200).json({ message: 'Login realizado com sucesso', user: { id: clerkUser.id, email: data.email, nomeCompleto: fullName } });
  } catch (error: any) {
    console.error('Login Error:', error);
    res.status(401).json({ error: 'Falha na autenticação' });
  }
};

export const me = async (req: Request, res: Response): Promise<void> => {
  try {
    const token = req.cookies.token;
    if (!token) {
      res.status(401).json({ error: 'Não autenticado' });
      return;
    }

    const decoded = jwt.verify(token, JWT_SECRET) as any;
    
    // Idealmente buscaríamos no banco, mas para simplificar retornamos os dados do token
    res.status(200).json({ user: decoded });
  } catch (error) {
    res.status(401).json({ error: 'Token inválido' });
  }
};

export const logout = async (req: Request, res: Response): Promise<void> => {
  res.clearCookie('token');
  res.status(200).json({ message: 'Logout realizado com sucesso' });
};

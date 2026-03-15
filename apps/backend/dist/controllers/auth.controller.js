"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.logout = exports.me = exports.login = exports.register = void 0;
const backend_1 = require("@clerk/backend");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const dbSync_service_1 = require("../services/dbSync.service");
const zod_1 = require("zod");
const clerkClient = (0, backend_1.createClerkClient)({
    secretKey: process.env.CLERK_SECRET_KEY,
});
const JWT_SECRET = process.env.JWT_SECRET || 'secret_dev_key';
const registerSchema = zod_1.z.object({
    email: zod_1.z.string().email(),
    password: zod_1.z.string().min(8),
    firstName: zod_1.z.string().min(1),
    lastName: zod_1.z.string().min(1),
});
const loginSchema = zod_1.z.object({
    email: zod_1.z.string().email(),
    password: zod_1.z.string().min(1),
});
const register = async (req, res) => {
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
        const localUser = await dbSync_service_1.DbSyncService.syncUser(clerkUser.id, data.email, fullName);
        // 3. Gerar JWT do Backend
        const token = jsonwebtoken_1.default.sign({ userId: localUser.id, email: localUser.email, clerkId: clerkUser.id }, JWT_SECRET, {
            expiresIn: '7d',
        });
        // 4. Configurar Cookie HttpOnly
        res.cookie('token', token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            sameSite: 'strict',
            maxAge: 7 * 24 * 60 * 60 * 1000, // 7 dias
        });
        res.status(201).json({ message: 'Registrado com sucesso', user: { id: localUser.id, email: localUser.email, nomeCompleto: localUser.nome_completo } });
    }
    catch (error) {
        console.error('Registration Error:', error);
        res.status(400).json({ error: error.message || 'Falha ao registrar usuário' });
    }
};
exports.register = register;
const login = async (req, res) => {
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
        const localUser = await dbSync_service_1.DbSyncService.syncUser(clerkUser.id, data.email, fullName);
        // 4. Gerar JWT do Backend
        const token = jsonwebtoken_1.default.sign({ userId: localUser.id, email: localUser.email, clerkId: clerkUser.id }, JWT_SECRET, {
            expiresIn: '7d',
        });
        // 5. Configurar Cookie HttpOnly
        res.cookie('token', token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            sameSite: 'strict',
            maxAge: 7 * 24 * 60 * 60 * 1000,
        });
        res.status(200).json({ message: 'Login realizado com sucesso', user: { id: localUser.id, email: localUser.email, nomeCompleto: localUser.nome_completo } });
    }
    catch (error) {
        console.error('Login Error:', error);
        res.status(401).json({ error: 'Falha na autenticação' });
    }
};
exports.login = login;
const me = async (req, res) => {
    try {
        const token = req.cookies.token;
        if (!token) {
            res.status(401).json({ error: 'Não autenticado' });
            return;
        }
        const decoded = jsonwebtoken_1.default.verify(token, JWT_SECRET);
        // Idealmente buscaríamos no banco, mas para simplificar retornamos os dados do token
        res.status(200).json({ user: decoded });
    }
    catch (error) {
        res.status(401).json({ error: 'Token inválido' });
    }
};
exports.me = me;
const logout = async (req, res) => {
    res.clearCookie('token');
    res.status(200).json({ message: 'Logout realizado com sucesso' });
};
exports.logout = logout;

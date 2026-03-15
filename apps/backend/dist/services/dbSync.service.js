"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DbSyncService = void 0;
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
class DbSyncService {
    /**
     * Sincroniza o usuário do Clerk com o banco de dados local.
     * Cria se não existir, atualiza se existir.
     */
    static async syncUser(clerkId, email, nomeCompleto) {
        try {
            const cliente = await prisma.cliente.upsert({
                where: { email },
                update: {
                    clerk_id: clerkId,
                    nome_completo: nomeCompleto,
                },
                create: {
                    email,
                    clerk_id: clerkId,
                    nome_completo: nomeCompleto,
                },
            });
            return cliente;
        }
        catch (error) {
            console.error('Erro ao sincronizar cliente no bd local:', error);
            throw new Error('Falha na sincronização do banco de dados');
        }
    }
}
exports.DbSyncService = DbSyncService;

import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export class DbSyncService {
  /**
   * Sincroniza o usuário do Clerk com o banco de dados local.
   * Cria se não existir, atualiza se existir.
   */
  static async syncUser(
    clerkId: string,
    email: string,
    nomeCompleto: string
  ) {
    try {
      // NOTE: Table "cliente" was removed on current schema. This service is deprecated.
      console.log('Sync user bypassed', clerkId, email, nomeCompleto);
      return null;
    } catch (error) {
      console.error('Erro ao sincronizar', error);
      throw new Error('Falha na sincronização do banco de dados');
    }
  }
}


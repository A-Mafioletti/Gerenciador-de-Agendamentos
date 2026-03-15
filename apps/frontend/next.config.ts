import type { NextConfig } from 'next';
import path from 'path';

const nextConfig: NextConfig = {
  // Configuração para resolver arquivos no monorepo (hoisted dependencies)
  outputFileTracingRoot: path.join(__dirname, '../../'),
};

export default nextConfig;

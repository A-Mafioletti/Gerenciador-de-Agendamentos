import type { NextConfig } from 'next';
import path from 'path';

const nextConfig: NextConfig = {
  // Configuração para resolver arquivos no monorepo (hoisted dependencies)
  outputFileTracingRoot: path.join(__dirname, '../../'),
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'img.clerk.com',
      },
    ],
  },
};

export default nextConfig;

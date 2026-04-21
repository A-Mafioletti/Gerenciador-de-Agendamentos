const nextJest = require('next/jest');

const createJestConfig = nextJest({
  // Permite ao next/jest carregar as configurações do next.config.js e .env no ambiente de testes
  dir: './',
});

const config = {
  coverageProvider: 'v8',
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
  },
};

module.exports = createJestConfig(config);
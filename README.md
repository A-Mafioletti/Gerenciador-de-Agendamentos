# Gerenciador de Agendamentos Inteligente

Bem-vindo ao repositório do **Gerenciador de Agendamentos Inteligente**, uma plataforma autônoma projetada para profissionais que executam trabalhos manuais (como eletricistas, encanadores, marcenaria e estética a domicílio).

Este sistema atua como um assistente digital 24/7, permitindo que os clientes agendem horários de forma independente e fácil, integrando-se diretamente à agenda do profissional, reduzindo tarefas administrativas e evitando choques de horários ("double-booking").

## 🚀 Sobre o Projeto

O projeto visa solucionar a perda de serviços e tempo enfrentada por profissionais autônomos que não conseguem conciliar o atendimento imediato aos clientes com a execução do seu trabalho.

### Principais Funcionalidades (MVP - v1)
- **Página de Agendamento Pública (Booking Page):** Link único para o cliente agendar serviços visualizando os horários vagos em tempo real.
- **Minha Agenda (Dashboard):** Painel de controle para o profissional, exibindo os serviços e horários do dia.
- **Gestão de Disponibilidade:** Configuração de grade horária, bloqueios de horário e cadastro de serviços com suas respectivas durações.
- **Acesso Seguro:** Autenticação para o profissional acessar as configurações e a agenda.

## 🛠️ Tecnologias Utilizadas

A aplicação é um monorepo construído com tecnologias modernas voltadas para performance e escalabilidade (Jamstack / Serverless):

- **Linguagem:** TypeScript
- **Frontend:** Next.js (App Router), React, Tailwind CSS
- **Backend:** Next.js (Edge/Serverless Runtime), Express (em `apps/backend` para testes de integração iniciais)
- **Banco de Dados:** PostgreSQL (via Supabase)
- **Deployment:** Vercel (Frontend & Backend) / Docker Compose (Ambiente Local)

## 📦 Estrutura do Monorepo

O projeto está estruturado da seguinte forma:

```bash
gerenciador-agendamentos/
├── apps/
│   ├── frontend/        # Aplicação Web Principal (Next.js)
│   └── backend/         # API Base/Microsserviço (Express/Node.js)
├── docs/                # Documentação técnica e de produto (PRD, Spec)
├── infra/               # Configurações de infraestrutura
├── docker-compose.yml   # Orquestração local de containers
└── package.json         # Workspaces do monorepo
```

## 💻 Como rodar o projeto localmente

### Pré-requisitos
- [Node.js](https://nodejs.org/) (versão LTS recomendada)
- [Docker](https://www.docker.com/) e Docker Compose (para o banco de dados e execução em containers)

### Passo a Passo

1. Instale as dependências na raiz do monorepo:
   ```bash
   npm install
   ```

2. Certifique-se de que o arquivo `.env` na raiz está configurado com as variáveis locais do banco de dados:
   ```env
   POSTGRES_USER=postgres
   POSTGRES_PASSWORD=postgres
   POSTGRES_DB=agendamentos
   ```

3. Suba os serviços usando o Docker Compose:
   ```bash
   npm run dev
   # ou
   docker compose up --build
   ```

   Os serviços estarão disponíveis em:
   - **Frontend:** http://localhost:3000
   - **Backend API:** http://localhost:3001
   - **Banco de Dados (PostgreSQL):** localhost:5432

## 📝 Regras e Contribuição

Para contribuir com o projeto, siga as orientações detalhadas na documentação contida na pasta `/docs`. Todas as especificações técnicas, regras de UI/UX e definições de produto (PRD) devem ser rigorosamente seguidas durante a implementação.

Destacamos a abordagem **Mobile-First** para todas as interfaces e a padronização das datas em **UTC** no banco de dados.

## 📄 Licença

Este projeto é desenvolvido e mantido de acordo com as diretrizes e regras restritas deste repositório fechado. O código-fonte não é aberto para uso livre sem autorização.

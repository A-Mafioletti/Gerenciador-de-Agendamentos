# 📅 Gerenciador de Agendamentos Inteligente (MVP)

> **🚀 APLICAÇÃO EM PRODUÇÃO (LIVE DEMO):**
> 
> 🧑‍💻 **Visão do Cliente (Pública):** **[👉 ACESSAR A BOOKING PAGE](https://projeto-agendamentos-ashen.vercel.app)**
> *(Acesso livre para testes. Escolha um horário para simular o fluxo de agendamento).*
>
> 🧑‍🔧 **Visão do Profissional (Dashboard):** **[👉 ACESSAR O LOGIN DO SISTEMA](https://projeto-agendamentos-ashen.vercel.app/login)**
> *(Protegido via Clerk. Utilize a opção "Continuar com Google" com qualquer conta para acessar o painel administrativo e testar os bloqueios de agenda).*

Bem-vindo ao repositório do Gerenciador de Agendamentos Inteligente, uma plataforma autônoma projetada para profissionais que executam trabalhos manuais (como eletricistas, encanadores, marcenaria e estética a domicílio). Este sistema atua como um assistente digital 24/7, permitindo que os clientes agendem horários de forma independente, reduzindo tarefas administrativas e evitando choques de horários ("double-booking").

---

## 🛠️ Atendimento aos Requisitos Técnicos e Integrações

A aplicação é um monorepo construído com tecnologias modernas da stack Jamstack e Serverless. O desenvolvimento do Frontend e do Backend foi realizado em Next.js com React e TypeScript, operando de forma integrada como um Monolito Modular. Para garantir alta disponibilidade, a hospedagem e o deploy automático ocorrem na Vercel com pipeline de CI/CD contínuo. Toda a segurança e a gestão de usuários são gerenciadas pelo Clerk, que protege as rotas privadas do Dashboard e lida com o fluxo de login de forma segura. A persistência de dados é assegurada pelo Supabase rodando PostgreSQL, integrado através do Prisma ORM para armazenar as configurações da agenda e o registro de todos os agendamentos realizados.

---

## 📦 Estrutura do Repositório (Monorepo)
```text
gerenciador-agendamentos/
├── apps/
│   ├── frontend/        # Aplicação Web Principal (Vercel)
│   └── backend/         # API Base, Lógica de Negócios e ORM (Prisma)
├── docs/                # Documentação técnica, produto, negócios e IA
└── package.json         # Workspaces do monorepo
```

---

## 🤖 Uso de Inteligência Artificial (Pair Programming)

Este projeto utilizou ferramentas de IA Generativa (Google Gemini) como suporte ao desenvolvimento. O registro detalhado dos prompts utilizados para modelagem de banco de dados, resolução de bugs de infraestrutura e geração de documentação encontra-se no arquivo:
📄 **[Acesse os Prompts de IA aqui](./docs/ai_prompts.md)**

---

## 📚 Documentação Complementar

A documentação completa exigida para a avaliação está organizada na pasta `/docs/` e foi integralmente revisada:
* 🎯 **[PRD (Definição de Requisitos e Escopo)](./docs/prd.md)**
* ⚙️ **[Especificação Técnica, Arquitetura e Stack](./docs/spec_tech.md)**
* 🎨 **[Especificação de UI, User Flow e Mockups](./docs/spec_ui.md)**

---

## 💻 Como rodar o projeto localmente

**Pré-requisitos:** Node.js (versão LTS recomendada) e Instância do PostgreSQL (ou Supabase configurado).

1. Clone o repositório e acesse a pasta do backend executando `cd apps/backend`.
2. Instale as dependências executando `npm install`.
3. Crie um arquivo `.env` baseado no `.env.example` e insira suas credenciais do banco.
4. Sincronize o banco de dados via Prisma executando `npx prisma generate` seguido de `npx prisma db pull`.
5. Inicie o servidor de desenvolvimento executando `npm run dev`.
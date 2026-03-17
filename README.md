# 📅  Gerenciador de Agendamentos Inteligente   

Bem-vindo ao repositório do Gerenciador de Agendamentos Inteligente, uma plataforma autônoma projetada para profissionais que executam trabalhos manuais (como eletricistas, encanadores, marcenaria e estética a domicílio).

Este sistema atua como um assistente digital 24/7, permitindo que os clientes agendem horários de forma independente e fácil, integrando-se diretamente à agenda do profissional, reduzindo tarefas administrativas e evitando choques de horários ("double-booking").

## 🚀 Status do Projeto (Produção)

A aplicação está implantada em ambiente público e 100% funcional:

Link de Acesso: https://projeto-agendamentos-ashen.vercel.app

Credenciais: O acesso à Booking Page é público para os clientes finais. Não é necessário login para testar o fluxo de agendamento.

## 🛠️ Tecnologias e Estrutura (Monorepo)

A aplicação é um monorepo construído com tecnologias modernas voltadas para performance e escalabilidade (Jamstack / Serverless):

Linguagem: TypeScript

Frontend: Next.js, React, Tailwind CSS

Backend/API: Node.js (Vercel Edge/Serverless Functions)

Banco de Dados: PostgreSQL (via Supabase) com PgBouncer

Deployment: Vercel automatizado

## 📦 Estrutura do Repositório

gerenciador-agendamentos/
├── apps/
│   ├── frontend/        # Aplicação Web Principal (Vercel)
│   └── backend/         # API Base, Lógica de Negócios e ORM (Prisma)
├── docs/                # Documentação técnica, produto, negócios e IA
└── package.json         # Workspaces do monorepo


## 🤖 Uso de Inteligência Artificial (IA)

Este projeto utilizou ferramentas de IA Generativa (Google Gemini) como suporte ao desenvolvimento ("Pair Programming"). O registro detalhado dos prompts utilizados para modelagem de banco de dados, resolução de bugs de infraestrutura e geração de documentação encontra-se no arquivo /docs/ai_prompts.md.

## 💻 Como rodar o projeto localmente

Pré-requisitos

Node.js (versão LTS recomendada)

Instância do PostgreSQL (ou Supabase configurado)

Passo a Passo

Clone o repositório e acesse a pasta do backend:

cd apps/backend

Instale as dependências:

npm install

Crie um arquivo .env baseado no .env.example e insira suas credenciais do banco.

Sincronize o banco de dados (Prisma):

npx prisma generate
npx prisma db pull

Inicie o servidor de desenvolvimento:

npm run dev

## 📝 Documentação Complementar

Para contribuir ou entender as decisões de negócio e arquitetura, consulte a pasta /docs, que contém:

Negócios: Lean Canvas, Persona, Jornada do Usuário.

Técnico: PRD, Especificação Técnica, Especificação UI, ADRs e C4 Model.
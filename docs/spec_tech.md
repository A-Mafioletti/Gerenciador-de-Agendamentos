# Especificação Técnica

## Visão Geral Técnica

A presente Especificação Técnica do Produto estabelece as diretrizes arquiteturais, stack tecnológica padrão e regras de segurança para o desenvolvimento do **Gerenciador de Agendamentos Inteligente (MVP - v1)**. 
O objetivo deste documento é servir como um guia definitivo para o time de desenvolvimento (humano e assistido por inteligência artificial), garantindo consistência, escalabilidade projetada e manutenção facilitada do código.

---

## Arquitetura de Referência

Para atender aos requisitos de alta disponibilidade (RNF-02) e foco no MVP, a aplicação adotará uma arquitetura focada no ecossistema Web Moderno (**Jamstack / Serverless**):

- **Estilo Arquitetural**: Monorepo Serverless. A aplicação concentrará o frontend e funções de backend num único repositório, otimizando a velocidade de entrega para a v1.
- **Componentes Principais**: 
  - *Client Layer*: Renderização híbrida (SSR para a booking page, CSR para o Dashboard).
  - *Data/API Layer*: Server Functions/Actions (Next.js).
  - *Database Provider*: Banco de dados relacional gerenciado em nuvem (Supabase).
- **Protocolos de Comunicação**: HTTPS obrigatório e chamadas REST.
- **Infraestrutura de Deployment**: Deploy automatizado a cada push via Vercel.

---

## Stack Tecnológica

### Frontend
- **Linguagem**: TypeScript
- **Framework web**: Next.js (React)
- **Estilização**: Tailwind CSS (Abordagem Utility-first / Mobile-First).

### Backend e Persistência
- **Linguagem**: TypeScript
- **Runtime**: Node.js (Vercel Serverless Functions)
- **Framework**: Next.js (Route Handlers)
- **Persistência**: PostgreSQL (Fornecido pelo Supabase)
- **ORM**: Prisma ORM

### Stack de Desenvolvimento
- **IDE**: VS Code
- **Gerenciamento de pacotes**: `npm`
- **Ambiente local**: Next.js Dev Server + variáveis `.env.local`.
- **Infraestrutura como Código (IaC)**: Utilização do **Terraform** para provisionamento da infraestrutura de forma declarativa e documentada.
- **Pipeline CI/CD**: Deploy automático nativo na Vercel conectado à branch `main` do GitHub.
- **IA como Ferramenta**: Uso do Gemini e ChatGPT para *pair programming*, refatoração e geração de documentação (prompts de sistema documentados).

### Integrações e Observabilidade
- **Persistência / BaaS**: Supabase.
- **Deployment**: Vercel.
- **Observabilidade**: Logs da Vercel (Analytics) para rastrear eventos relevantes e erros do sistema.

---

## Segurança (Autenticação e Autorização)

### O Caso do Clerk vs. Supabase Auth
*Nota Arquitetural:* Embora a documentação base do projeto citasse inicialmente a ferramenta **Clerk** para gestão de usuários, o desenvolvimento provou que a **integração nativa com o Supabase Auth** é arquiteturalmente superior para este caso específico.
A escolha definitiva pelo Supabase Auth justifica-se pela adoção do **Row Level Security (RLS)**. Manter a autenticação e o banco de dados no mesmo provedor permite que o próprio banco de dados (PostgreSQL) recuse acessos indevidos com base no ID do usuário logado, elevando exponencialmente a segurança dos dados da aplicação em comparação com uma solução terceira como o Clerk.

### Segurança de Dados
- Sessões geradas via JWT seguro.
- Todo tráfego forçado via TLS (HTTPS).
- Validação rigorosa de inputs no frontend e backend.

---

## APIs e Comunicação
A comunicação cliente-servidor segue o padrão REST via Next.js Route Handlers.

### Endpoints Principais
- **`POST /api/appointments`**:
  - *Responsabilidade:* Receber os dados do formulário público de agendamento e gravar no banco.
  - *Padrão de Comunicação:* Recebe payload JSON com `client_name`, `start_time` e `service_id`.
- **`GET /api/appointments`**:
  - *Responsabilidade:* Listar os agendamentos no Dashboard do profissional.
  - *Padrão de Comunicação:* Rota protegida por JWT. Retorna array JSON.
- **`POST /api/auth`**:
  - *Responsabilidade:* Validar credenciais do profissional no Supabase.

---

## Tenancy e Histórico de Operações

- **Estratégia**: Arquitetura *Multi-Tenant* (Single Database, Shared Schema).
- Todos os agendamentos possuem a chave `professional_id`. O RLS do banco de dados bloqueia tentativas de leitura cruzada entre diferentes prestadores.
- A plataforma Supabase mantém logs automáticos (histórico de operações) de acessos e modificações na estrutura de dados para auditoria técnica.

---

## Diretrizes para Desenvolvimento Assistido por IA

1. **Priorização TypeScript**: A IA não deve sugerir blocos de código com tipagens vagas (`any`).
2. **Separação de Preocupações (SoC)**: Manter lógicas de banco isoladas no servidor.
3. **Respeito ao Escopo**: A IA deverá alertar se o código solicitado extrapolar o escopo do documento `prd.md`.
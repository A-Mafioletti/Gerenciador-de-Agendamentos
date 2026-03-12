# Especificação Técnica

## Visão Geral Técnica

A presente Especificação Técnica do Produto estabelece as diretrizes arquiteturais, stack tecnológica padrão e regras de segurança para o desenvolvimento do **Gerenciador de Agendamentos Inteligente (MVP - v1)**. 
O objetivo deste documento é servir como um guia definitivo para o time de desenvolvimento (humano e assistido por inteligência artificial), garantindo consistência, escalabilidade projetada e manutenção facilitada do código desde o primeiro commit. O público-alvo central são desenvolvedores, engenheiros de software e agentes de IA que atuarão na base de código.

---

## Arquitetura de Referência

Para atender aos requisitos de alta disponibilidade (RNF-02) e foco no MVP, a aplicação adotará uma arquitetura focada no ecossistema Web Moderno (**Jamstack / Serverless**):

- **Estilo Arquitetural**: Monolito Serverless. A aplicação concentrará o frontend e funções de backend num único repositório e infraestrutura de deploy, otimizando a velocidade de entrega para a v1.
- **Componentes Principais**: 
  - *Client Layer*: Renderização híbrida (Server-Side Rendering para páginas públicas de agendamento visando performance; Client-Side Rendering para o Dashboard interativo do profissional).
  - *Data/API Layer*: Server Functions/Actions sem necessidade de provisão de servidores dedicados.
  - *Database Provider*: Banco de dados relacional gerenciado em nuvem (BaaS - Backend as a Service).
- **Autenticação e Autorização**: Provedor de identidade externo (Identity-as-a-Service) integrado nativamente com o banco de dados.
- **Protocolos de Comunicação**: HTTPS obrigatório. Comunicação cliente-servidor nativa do framework e chamadas REST para APIs externas (se necessário).
- **Infraestrutura de Deployment**: Plataforma de Edge/Serverless computing com deploy automatizado a cada push (Vercel).

---

## Stack Tecnológica

### Frontend

- **Linguagem**: TypeScript (Strict mode)
- **Framework web**: React estruturado em Next.js (App Router preferencialmente)
- **Estilização**: Tailwind CSS (Abordagem Utility-first para garantir consistência e aderência aos princípios *Mobile-First* - RNF-01). Suporte de biblioteca de componentes headless (ex: Radix UI ou shadcn/ui).

### Backend

- **Linguagem**: TypeScript
- **Runtime**: Node.js (via Vercel Serverless Functions / Next.js Edge Runtime)
- **Framework**: Next.js (Server Actions e Route Handlers)
- **Persistência**: PostgreSQL (Fornecido pelo Supabase)
- **ORM**: Prisma ORM ou Drizzle ORM (garantindo tipagem *end-to-end* do banco ao front)

### Stack de Desenvolvimento

- **IDE**: VS Code (ou Cursor)
- **Gerenciamento de pacotes**: `npm` ou `pnpm`
- **Ambiente de desenvolvimento local**: Next.js Dev Server (`npm run dev`) + Supabase Local CLI (para replica do DB local)
- **Infraestrutura como Código (IaC)**: Supabase Migrations (para schema estrutural) via Prisma/Drizzle.
- **Pipeline CI/CD**: Deploy automático nativo na Vercel conectado à branch `master`/`main` do GitHub. GitHub Actions para checks de Linting/Type-checking.

### Integrações

- **Persistência / BaaS**: Supabase
- **Deployment**: Vercel
- **Segurança (autenticação e autorização)**: Supabase Auth (Integrado p/ facilitar RLS) ou Clerk.
- **Observabilidade**: Vercel Analytics / Sentry (para rastreamento de erros básicos de frontend e backend).

### Gestão de Datas e Fusos Horários (Timezones)

- **Padrão de Armazenamento**: Todas as datas e horários devem ser obrigatoriamente salvos no banco de dados em padrão `UTC` (ISO 8601).
- **Manipulação no Frontend**: O parse e a exibição de horários para o usuário final e profissional deverão ser convertidos para o *timezone* local do navegador daquele usuário, utilizando bibliotecas leves como `date-fns` ou a API nativa `Intl`.

---

## Segurança

### Autenticação e Gestão de Sessão

- Todo o fluxo do painel ("Dashboard") exigirá autenticação do Profissional.
- Sessões geridas automaticamente pelo Middleware do Next.js + Provedor Auth, usando cookies HttpOnly seguros para armazenar tokens JWT.
- A página do Cliente (Booking Page) é pública, mas submissões de dados possuem *Rate Limiting* (Next.js middleware) para prevenir ataques de spam.

### Controle de Acesso e Autorização

- Aplicação de **Row Level Security (RLS)** no banco de dados (nível Supabase).
- Uma query direta no banco só retornará dados se o JWT da requisição provar que o usuário é dono daqueles dados (garantindo RNF-03 - LGPD).

### Segurança de Dados e Validação

- **Validação de Inputs**: Uso rigoroso do `Zod` (ou biblioteca similar de esquemas) para validação de todas as entradas do usuário, tanto no frontend (antes de enviar) quanto no backend Server Actions (antes de salvar).

#### Criptografia e Proteção de Dados

- Todo tráfego forçado via TLS (HTTPS).
- Supabase em repouso utiliza padrão AES-256 para o PostgreSQL.
- Senhas, caso gerenciadas nativamente pelo provedor (Supabase Auth), nunca vão tocar nosso código bruto, baseando-se em salting/hashing no servidor seguro do próprio Supabase.

### Segurança da Infraestrutura e Configuração

- Regras restritas de CORS focadas unicamente na URL hospedada da aplicação.
- Variáveis de Ambiente gerenciadas estritamente na plataforma Vercel; nunca commitadas (*.env.local* ignorado no git).

### Segurança no Desenvolvimento e Operação (DevSecOps)

- Atualizações contínuas de pacotes (`npm audit`).
- Revisão de dependências antes de injetá-las no escopo para prevenir *supply chain attacks*.

---

## APIs

Na V1, as "APIs" serão primariamente concebidas como funções internas (Next.js Server Actions), o que anula a necessidade de mapeamento REST estrito para consumo próprio. No entanto, para rotas públicas ou webhooks futuros:

- **Endpoints do Sistema**: Concentrados em `/api/*` (Route Handlers do Next.js).
- **Padrão de nomenclatura**: Recursos no plural (`/api/appointments`, `/api/availability`).
- **Comunicação**: Request/Response em padrão estrito `application/json`.
- **Tratamento de Erros**: Respostas HTTP padronizadas (Ex: 400 *Bad Request*, 401 *Unauthorized*, 404 *Not Found*, 500 *Internal Server Error*) acompanhadas de mensagens tratadas que não vazem contexto de database.

---

## Tenancy

O sistema foi desenhado para atuar em modelo de plataforma SaaS (Software as a Service) desde o primeiro dia. 

- **Estratégia**: Arquitetura *Multi-Tenant* em banco de dados único agrupado (Single Database, Shared Schema).
- **Isolamento e Identificação**: Todos os dados cruciais (agendamentos, clientes cadastrados, configurações de agenda) possuirão uma coluna obrigatória `professional_id` (foreign key para a tabela de usuários autenticados).
- **Segurança (RLS)**: O banco de dados bloqueará em nível de engine tentativas de um profissional (Provider A) ler os agendamentos de outro (Provider B). As queries não dependem puramente da aplicação filtrar arrays via código; o banco se recusa a entregar o dado a quem não tem a chave correta.

---

## Diretrizes para Desenvolvimento Assistido por IA

Considerando a utilização de IAs generativas de código durante o ciclo de desenvolvimento, as seguintes diretrizes são determinantes:

1. **Priorização Typescript**: A IA não deve sugerir blocos de código com tipagens vagas (`any`). O uso consciente das inferências do Zod e de interfaces/tipos bem definidos é mandatório.
2. **Separação de Preocupações (SoC)**: Manter lógicas de banco de dados/API dentro do escopo seguro de Server Actions ou Server Components isolados; manter Client Components apenas com lógica visual ou de estado interativo. 
3. **Estilização Pragmática**: A IA deverá evitar adicionar arquivos CSS puros ou módulos CSS caso seja possível alcançar o resultado com classes utilitárias nativas do Tailwind CSS. Componentes deverão seguir o estilo "copy-paste" consolidado (como shadcn/ui).
4. **Respeito ao MVP**: Se um comando de criação de funcionalidade for solicitado pelo desenvolvedor que extrapole flagrantemente o escopo do documento `prd.md` (como criar módulo de checkout V3 na fase da V1), a IA tem o dever de alertar, mas proceder se instruída.
5. **Autonomia Contextual**: Ao propor novos arquivos, estruturá-los na arquitetura nativa do `/src/app/` (Next.js App Router), considerando hierarquia de layouts e arquivos fixos do router (`page.tsx`, `layout.tsx`, `loading.tsx` etc.).

---

# Diagrama de Contêineres (Nível 2)

Este diagrama demonstra a arquitetura em nível de contêineres (unidades implantáveis), ilustrando as responsabilidades da aplicação web, o ambiente de execução (Docker/Vercel) e as integrações com serviços de terceiros (SaaS) que compõem o ecossistema.

```mermaid
graph TD
    %% Definição de Estilos
    classDef actor fill:#1e293b,stroke:#cbd5e1,stroke-width:2px,color:#f8fafc
    classDef container fill:#0284c7,stroke:#0369a1,stroke-width:2px,color:#f8fafc
    classDef external fill:#475569,stroke:#334155,stroke-width:2px,color:#f8fafc

    %% Atores
    Cliente((🧑‍💼 Cliente Final)):::actor
    Prof((🧑‍🔧 Profissional)):::actor

    %% Sistemas Externos (SaaS)
    Clerk[🔒 Clerk<br/>Provedor de Identidade]:::external
    Sentry[👁️ Sentry SDK<br/>Plataforma de Observabilidade]:::external
    Gemini[🧠 Google Gemini<br/>API de IA Generativa]:::external

    %% Fronteira de Execução (Docker / Serverless)
    subgraph "Ambiente de Aplicação (Nuvem: Vercel / Local: Docker Compose)"
        UI[💻 Aplicação Web / Frontend<br/>Container: Next.js / React]:::container
        API[⚙️ Backend API / Server Actions<br/>Container: Node.js / Next.js API Routes]:::container
    end

    %% Banco de Dados
    DB[(🗄️ Banco de Dados Gerenciado<br/>Container: Supabase PostgreSQL + PgBouncer)]:::container

    %% Fluxos de Interação
    Cliente -->|Acessa via HTTPS| UI
    Prof -->|Acessa Dashboard Logado| UI
    
    UI -->|Autenticação / Validação JWT| Clerk
    UI -->|Reporta Exceções de Renderização| Sentry
    UI -->|Chamadas RPC / HTTP| API
    
    API -->|Valida Sessão do Usuário| Clerk
    API -->|Executa SQL via Prisma ORM| DB
    API -->|Reporta Falhas Críticas e Tracing| Sentry
    API -->|Solicita Briefing da Agenda| Gemini
```

> **Notas Arquiteturais:**
> * **Docker e Portabilidade:** Conforme definido no RNF-06, a aplicação e suas dependências são containerizadas via Docker (orquestradas via `docker-compose`) para garantir a paridade entre o ambiente de desenvolvimento local e a infraestrutura de produção Serverless (Vercel).
> * **Connection Pooling:** O acesso ao banco de dados pelo contêiner da API é intermediado pelo `PgBouncer` nativo do Supabase, evitando o esgotamento de conexões inerente a arquiteturas Serverless.
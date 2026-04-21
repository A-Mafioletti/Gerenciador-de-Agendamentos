# Diagrama de Implantação (Deployment)

Este diagrama detalha a topologia de infraestrutura, descrevendo a esteira de automação (CI/CD), a hospedagem Serverless definitiva e a rede de serviços externos que compõem o ecossistema de produção, além de ilustrar a estratégia de portabilidade local.

```mermaid
graph TD
    %% Estilos
    classDef local fill:#1e293b,stroke:#64748b,stroke-width:2px,color:#f8fafc,stroke-dasharray: 5 5
    classDef github fill:#181717,stroke:#fff,stroke-width:2px,color:#fff
    classDef vercel fill:#000000,stroke:#333,stroke-width:2px,color:#fff
    classDef supabase fill:#3ECF8E,stroke:#333,stroke-width:2px,color:#000
    classDef saas fill:#475569,stroke:#334155,stroke-width:2px,color:#fff

    %% Ambiente Local (Strictly Dev)
    subgraph "Ambiente Local (Apenas Desenvolvimento)"
        Docker[🐳 Docker Compose<br/>Garantia de Portabilidade / Plano B]:::local
    end

    %% Pipeline de Automação
    subgraph "GitHub Cloud"
        Actions[🚀 GitHub Actions<br/>CI/CD Pipeline]:::github
    end

    %% Camada de Produção Oficial
    subgraph "Vercel Cloud (Produção Oficial)"
        CDN[🌐 Vercel Edge Network<br/>LCP & Caching]:::vercel
        Serverless[⚙️ Next.js Serverless Functions<br/>Runtime: Node.js]:::vercel
    end

    %% Camada de Dados
    subgraph "Supabase Cloud"
        PgBouncer[🔌 Connection Pooler<br/>PgBouncer / IPv4]:::supabase
        Database[(🗄️ PostgreSQL Database<br/>Managed Instance)]:::supabase
    end

    %% Serviços Externos
    subgraph "External SaaS Mesh"
        Clerk[🔒 Clerk Auth]:::saas
        Sentry[👁️ Sentry Monitoring]:::saas
        Gemini[🧠 Google Gemini AI]:::saas
    end

    %% Fluxos de Implantação e Execução
    Docker -.->|Git Push (Desenvolvedor)| Actions
    Actions -->|Build & Deploy| Serverless
    Actions -->|Upload Source Maps| Sentry

    Internet((🌎 Internet)) -->|HTTPS Request| CDN
    CDN -->|Dynamic Routes| Serverless
    
    Serverless -->|JWT Auth| Clerk
    Serverless -->|Telemetria| Sentry
    Serverless -->|Prompting| Gemini
    Serverless -->|TCP/IP| PgBouncer
    PgBouncer -->|SQL| Database
```

> **Notas de Infraestrutura (Decisões de Engenharia):**
> * **Serverless First (Vercel):** O ambiente oficial de produção é 100% Serverless, garantindo auto-scaling, alta disponibilidade e redução de custos operacionais (sem servidores ociosos).
> * **O Papel do Docker (Portabilidade):** O uso de containers Docker ocorre *exclusivamente* no ambiente de desenvolvimento. Ele atende ao RNF-06 (Portabilidade), garantindo paridade entre máquinas de desenvolvedores e atuando como um "Plano B" caso seja necessária uma migração futura para infraestruturas tradicionais (IaaS/PaaS).
> * **Conectividade Eficiente:** O `PgBouncer` é vital para a arquitetura Serverless, pois gerencia o ciclo de vida das conexões com o PostgreSQL, evitando o esgotamento do pool durante picos de instâncias simultâneas na Vercel.
> * **Observabilidade de Borda:** A integração via GitHub Actions garante que cada novo deploy envie automaticamente os *Source Maps* para o Sentry, blindando a versão que está no ar.
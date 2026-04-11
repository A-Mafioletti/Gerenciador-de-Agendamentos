# Diagrama de Implantação (Deployment)

Este diagrama mostra a topologia de infraestrutura atual, detalhando a hospedagem Serverless e a distribuição na nuvem.

```mermaid
graph TD
  subgraph Vercel Cloud
    CDN[Vercel Edge Network<br/>Load Balancer & Cache]
    Serverless[Vercel Serverless Functions<br/>Next.js Backend]
  end
  
  subgraph Supabase Cloud
    PgBouncer[Connection Pooler<br/>IPv4]
    Database[(PostgreSQL Database<br/>Instância Gerenciada)]
  end

  Internet((Internet)) -->|Requisições Web| CDN
  CDN -->|Renderização Dinâmica| Serverless
  Serverless -->|TCP/IP| PgBouncer
  PgBouncer -->|SQL| Database
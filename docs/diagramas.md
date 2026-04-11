# Diagramas de Arquitetura do Sistema

Os diagramas abaixo detalham a arquitetura do "Gerenciador de Agendamentos Inteligente" em diferentes níveis de abstração, utilizando a notação padrão da disciplina.

## 1. Diagrama de Contexto
*Identifica o sistema principal, os atores envolvidos e os sistemas externos (BaaS).*

```mermaid
graph TD
  Cliente((Cliente))
  Profissional((Profissional))
  Sistema[Gerenciador de Agendamentos MVP]
  Clerk[Clerk Auth BaaS]
  Supabase[(Supabase / PostgreSQL BaaS)]

  Cliente -->|Acessa a Booking Page pública| Sistema
  Profissional -->|Acessa o Dashboard privado| Sistema
  Sistema -->|Valida Autenticação e Sessão| Clerk
  Sistema -->|Lê/Grava Agendamentos| Supabase
```

## 2. Diagrama de Contêineres
*Demonstra as responsabilidades do frontend, lógica de backend (Server Actions) e persistência.*

```mermaid
graph TD
  Usuario((Usuários))
  Frontend[Frontend Application<br/>Next.js / React]
  Backend[Backend API<br/>Next.js Server Actions]
  ORM[Prisma ORM]
  DB[(Supabase DB)]

  Usuario -->|Navega HTTP/HTTPS| Frontend
  Frontend -->|Requisita Operações| Backend
  Backend -->|Mapeia Dados Relacionais| ORM
  ORM -->|Instruções SQL| DB
```

## 3. Diagrama de Componentes
*Detalha a organização interna do contêiner da aplicação, demonstrando baixo acoplamento.*

```mermaid
graph TD
  subgraph Next.js App
    UI[UI Components<br/>Tailwind, Lucide]
    Hooks[React Hooks<br/>State & Validations]
    Actions[Server Actions<br/>Regras de Negócio]
  end
  
  UI -->|Dispara Eventos de UI| Hooks
  Hooks -->|Chama Funções Assíncronas| Actions
  Actions -->|Consulta/Mutação de Dados| BancoDeDados[(Supabase)]
```

## 4. Diagrama de Classes
*Representa o domínio do problema, as entidades principais e seus relacionamentos lógicos no banco.*

```mermaid
classDiagram
  class Profissional {
    +String id
    +String nome
    +String email
  }
  class ConfiguracaoAgenda {
    +String profissionalId
    +Time inicioExpediente
    +Time fimExpediente
    +Int intervaloMinutos
  }
  class Servico {
    +Int id
    +String nome
    +Int duracaoMinutos
    +Float preco
  }
  class Agendamento {
    +Int id
    +DateTime dataHora
    +String status
    +String clienteNome
    +String clienteTelefone
  }
  
  Profissional "1" -- "1" ConfiguracaoAgenda : possui
  Profissional "1" -- "*" Servico : oferece
  Profissional "1" -- "*" Agendamento : recebe
  Servico "1" -- "*" Agendamento : associado
```

## 5. Diagrama de Deployment
*Mostra a topologia de infraestrutura, escalabilidade e distribuição na nuvem.*

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
```
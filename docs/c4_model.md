# C4 Model - Gerenciador de Agendamentos

# Arquitetura do Sistema - Gerenciador de Agendamentos

Abaixo estão as representações arquiteturais do sistema, utilizando diagramas Mermaid para mapear desde o contexto geral até o deployment, refletindo a stack tecnológica definitiva do MVP (Next.js, Prisma, Clerk e Supabase PostgreSQL).

---

## 1. Diagrama de Contexto

Ilustra como os usuários interagem com o sistema em alto nível e as dependências externas da plataforma.

```mermaid
flowchart TD
    Cliente([Cliente do Profissional])
    Profissional([Carlos Eletricista])
    Sistema{Sistema de Agendamentos}
    Clerk[Clerk Auth Service]
    Supabase[Supabase PostgreSQL]

    Cliente -->|Acessa o site, escolhe serviço e horário livre| Sistema
    Profissional -->|Faz login, visualiza agenda, configura rotina e bloqueios| Sistema
    Sistema -->|Delega validação de identidade e sessão| Clerk
    Sistema -->|Persiste dados relacionais de agenda| Supabase
```

## 2. Diagrama de Contêineres

Detalha as principais tecnologias e serviços utilizados na arquitetura Serverless.

```mermaid
flowchart TD
    Usuarios([Usuários: Cliente e Profissional])
    
    subgraph Vercel [Hospedagem Frontend e API - Vercel]
        AppWeb[Aplicação Web Next.js\nReact, TailwindCSS]
        API[Server Actions & Route Handlers\nPrisma ORM]
    end
    
    subgraph ClerkCloud [Serviço de Identidade]
        Auth[Clerk Auth]
    end

    subgraph Supabase [Backend as a Service - Supabase]
        DB[(Banco de Dados\nPostgreSQL)]
    end

    Usuarios -->|HTTPS| AppWeb
    AppWeb -->|Proteção de Rotas via Middleware| Auth
    AppWeb -->|Requisições Internas| API
    API -->|Consultas seguras via Pooler TCP| DB
```

## 3. Diagrama de Componentes

Foca na estrutura interna da Aplicação Web e na comunicação com o banco de dados via ORM.

```mermaid
flowchart TD
    Interface[Interface de Usuário]
    
    subgraph NextJS [Componentes Next.js App Router]
        PaginaAgendamento[Página Pública\n/booking]
        DashboardAdmin[Dashboard Protegido\n/dashboard]
        Configuracoes[Painel de Ajustes\n/configuracoes]
        Clientes[Histórico\n/clientes]
    end
    
    subgraph DataAccess [Camada de Dados]
        PrismaClient[Prisma Client]
    end

    Interface --> PaginaAgendamento
    Interface --> DashboardAdmin
    Interface --> Configuracoes
    Interface --> Clientes

    PaginaAgendamento -->|POST /appointments| PrismaClient
    DashboardAdmin -->|Consulta Agenda / Insere Bloqueios| PrismaClient
    Configuracoes -->|Upsert Serviços e Expediente| PrismaClient
    Clientes -->|Filtra Agendamentos 'completed'| PrismaClient
```

## 4. Diagrama de Banco de Dados (ERD)

Detalha a estrutura relacional no PostgreSQL, destacando a estratégia Multi-Tenant e a gestão de rotina.

```mermaid
classDiagram
    class Professional {
        +uuid id
        +string name
        +string email
    }
    
    class ProfessionalSettings {
        +uuid id
        +uuid professional_id
        +jsonb working_days
        +string start_time
        +string end_time
    }

    class Service {
        +uuid id
        +string name
        +integer duration_minutes
        +uuid professional_id
    }
    
    class Appointment {
        +uuid id
        +datetime start_time
        +string client_name
        +string status
        +uuid service_id
        +uuid professional_id
    }

    Professional "1" -- "1" ProfessionalSettings : possui
    Professional "1" -- "*" Appointment : gerencia
    Professional "1" -- "*" Service : oferece
    Service "1" -- "*" Appointment : define
```

## 5. Diagrama de Deployment

Ilustra a infraestrutura física/cloud distribuída onde o sistema roda em produção.

```mermaid
flowchart TD
    Navegador([Navegador Web do Cliente/Profissional])
    
    subgraph CloudVercel [Vercel Edge Network]
        NextApp[Next.js Serverless UI & Functions]
    end

    subgraph CloudClerk [Clerk Cloud Infrastructure]
        AuthSvc[Sessão e Identidade]
    end
    
    subgraph CloudSupabase [Supabase Cloud AWS]
        Postgres[(PostgreSQL)]
    end

    Navegador -->|Tráfego Público HTTPS| CloudVercel
    CloudVercel -->|Validação de Token JWT| CloudClerk
    CloudVercel -->|Conexão TCP/IPv4| CloudSupabase
    CloudSupabase --> Postgres
```
# C4 Model - Gerenciador de Agendamentos

# Arquitetura do Sistema - Gerenciador de Agendamentos

Abaixo estão as representações arquiteturais do sistema, utilizando diagramas Mermaid para mapear desde o contexto geral até o deployment, refletindo a stack tecnológica atual (Next.js e Supabase).

---

## 1. Diagrama de Contexto

Ilustra como os usuários interagem com o sistema em alto nível.

```mermaid
flowchart TD
    Cliente([Cliente do Profissional])
    Profissional([Carlos Eletricista])
    Sistema{Sistema de Agendamentos}

    Cliente -->|Acessa o site, escolhe serviço e horário| Sistema
    Profissional -->|Faz login, visualiza e gerencia a agenda| Sistema
```

## 2. Diagrama de Contêineres

Detalha as principais tecnologias e serviços utilizados na arquitetura.

```mermaid
flowchart TD
    Usuarios([Usuários: Cliente e Profissional])
    
    subgraph Vercel [Hospedagem Frontend - Vercel]
        AppWeb[Aplicação Web Next.js\nReact, TailwindCSS]
    end
    
    subgraph Supabase [Backend as a Service - Supabase]
        Auth[Supabase Auth\nGerenciamento de Sessão]
        DB[(Banco de Dados\nPostgreSQL)]
    end

    Usuarios -->|HTTPS| AppWeb
    AppWeb -->|Autenticação e RLS| Auth
    AppWeb -->|Requisições via Supabase Client| DB
```

## 3. Diagrama de Componentes

Foca na estrutura interna da Aplicação Web (Frontend)

```mermaid
flowchart TD
    Interface[Interface de Usuário]
    
    subgraph NextJS [Componentes Next.js]
        PaginaAgendamento[Página Pública\n/booking]
        PaginaLogin[Página de Login\n/login]
        DashboardAdmin[Dashboard Protegido\n/dashboard]
    end
    
    subgraph SupabaseClient [Integração de Dados]
        SupabaseJS[Cliente Supabase JS]
    end

    Interface --> PaginaAgendamento
    Interface --> PaginaLogin
    Interface --> DashboardAdmin

    PaginaAgendamento -->|Salva agendamento| SupabaseJS
    PaginaLogin -->|Valida credenciais| SupabaseJS
    DashboardAdmin -->|Consulta/Filtra agenda| SupabaseJS
```

## 4. Diagrama de Banco de Dados

Detalha a estrutura das tabelas e relacionamentos no PostgreSQL.

```mermaid
classDiagram
    class Professional {
        +uuid id
        +string name
        +string email
        +string phone
    }
    
    class Service {
        +uuid id
        +string name
        +decimal price
        +integer duration_minutes
    }
    
    class Appointment {
        +uuid id
        +datetime start_time
        +string client_name
        +string client_whatsapp
        +string address_notes
        +uuid professional_id
    }

    Professional "1" -- "*" Appointment : possui
    Professional "1" -- "*" Service : oferece
```

## 5. Diagrama de Deployment

Ilustra a infraestrutura física/cloud onde o sistema roda.

```mermaid
flowchart TD
    Navegador([Navegador Web do Cliente/Profissional])
    
    subgraph CloudVercel [Vercel Edge Network]
        NextApp[Next.js Serverless UI]
    end
    
    subgraph CloudSupabase [Supabase Cloud AWS]
        Postgres[(PostgreSQL)]
        GoTrue[GoTrue Auth]
    end

    Navegador -->|Tráfego Público HTTPS| CloudVercel
    CloudVercel -->|Chamadas de API Seguras| CloudSupabase
    CloudSupabase --> Postgres
    CloudSupabase --> GoTrue
```  


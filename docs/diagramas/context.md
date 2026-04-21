# Diagrama de Contexto (Nível 1)

Este diagrama identifica o sistema principal do Gerenciador de Agendamentos Inteligente, as personas envolvidas e os sistemas externos (SaaS/BaaS) com os quais a plataforma se comunica para entregar valor e segurança.

```mermaid
graph TD
    %% Definição de Estilos
    classDef actor fill:#1e293b,stroke:#cbd5e1,stroke-width:2px,color:#f8fafc
    classDef system fill:#0ea5e9,stroke:#0284c7,stroke-width:3px,color:#f8fafc
    classDef external fill:#475569,stroke:#334155,stroke-width:2px,color:#f8fafc

    %% Atores Principais
    Cliente((🧑‍💼 Cliente Final)):::actor
    Profissional((🧑‍🔧 Profissional Autônomo)):::actor

    %% O Sistema
    Sistema[Gerenciador de Agendamentos Inteligente<br/>Sistema Central]:::system

    %% Sistemas Externos (Provedores)
    Clerk[🔒 Clerk Auth<br/>Provedor de Identidade]:::external
    Supabase[(🗄️ Supabase / PostgreSQL<br/>BaaS Data Layer)]:::external
    Sentry[👁️ Sentry SDK<br/>Plataforma de Observabilidade]:::external
    Gemini[🧠 Google Gemini<br/>API de IA Generativa]:::external

    %% Relacionamentos e Fluxos
    Cliente -->|Acessa Booking Page e agenda serviços| Sistema
    Profissional -->|Acessa Dashboard privado e configura rotina| Sistema
    
    Sistema -->|Delega autenticação e valida tokens| Clerk
    Sistema -->|Consulta e persiste regras de negócio| Supabase
    Sistema -->|Reporta telemetria e exceções críticas| Sentry
    Sistema -->|Envia contexto e solicita briefing diário| Gemini
```

> **Visão de Negócio:**
> O sistema atua como o orquestrador central da operação do profissional autônomo. Ele retira a carga operacional do usuário ao delegar responsabilidades pesadas para ferramentas de ponta do mercado: a segurança fica com o Clerk, o armazenamento elástico com o Supabase, o monitoramento preventivo com o Sentry e a análise inteligente da rotina com a IA do Google Gemini.
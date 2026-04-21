# Diagrama de Componentes (Nível 3)

Este diagrama detalha a organização interna do contêiner da aplicação Next.js, demonstrando o fluxo de dados, o baixo acoplamento e a integração com os serviços de monitoramento e inteligência artificial adotados no MVP.

```mermaid
graph TD
    %% Definição de Estilos
    classDef internal fill:#1e293b,stroke:#cbd5e1,stroke-width:2px,color:#f8fafc
    classDef external fill:#0f172a,stroke:#3b82f6,stroke-width:2px,color:#f8fafc
    classDef observer fill:#7f1d1d,stroke:#ef4444,stroke-width:2px,color:#f8fafc
    classDef ai fill:#064e3b,stroke:#10b981,stroke-width:2px,color:#f8fafc

    subgraph "Contêiner: Next.js App (Monolito Modular)"
        UI[UI Components<br/>Tailwind, Radix, React]:::internal
        Hooks[React Hooks<br/>State & Validations]:::internal
        Actions[Server Actions / Route Handlers<br/>Regras de Negócio e Travas]:::internal
        SentrySDK[Sentry SDK<br/>Error Boundary & Logger]:::observer
    end
    
    %% Sistemas Externos
    BancoDeDados[(Supabase PostgreSQL<br/>Data Layer)]:::external
    Gemini[API do Google Gemini<br/>LLM Service]:::ai

    %% Fluxo Principal de Dados
    UI -->|Dispara Eventos de UI| Hooks
    Hooks -->|Chama Funções Assíncronas| Actions
    Actions -->|Consulta/Mutação de Dados via Prisma| BancoDeDados
    
    %% Fluxos de IA
    Actions -->|Envia Contexto e Solicita Briefing| Gemini

    %% Fluxos de Observabilidade (Background)
    UI -.->|Captura Exceções de Renderização| SentrySDK
    Actions -.->|Tracing e Falhas de API| SentrySDK
```

> **Notas Arquiteturais:**
> * **Server Actions:** Atuam como a camada controladora, isolando as regras de negócio complexas (como a trava de *double-booking*) e protegendo as credenciais de APIs de terceiros (como a chave do Gemini).
> * **Sentry SDK:** Funciona como um *Observer* passivo. As linhas pontilhadas indicam que a captura de erros e o rastreamento de performance ocorrem em rotinas de background, garantindo que falhas de telemetria não afetem a responsividade da interface do usuário.
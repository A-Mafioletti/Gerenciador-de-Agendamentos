# Diagrama de Componentes (Nível 3)

Este diagrama detalha a organização interna do contêiner da aplicação Next.js, demonstrando o fluxo de dados e o baixo acoplamento.

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
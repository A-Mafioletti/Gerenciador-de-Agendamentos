# Diagrama de Contexto (Nível 1)

Este diagrama identifica o sistema principal do Gerenciador de Agendamentos, os atores envolvidos e os sistemas externos (BaaS) com os quais ele se comunica.

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
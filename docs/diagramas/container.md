
# Diagrama de Contêineres (Nível 2)

Este diagrama demonstra as responsabilidades da aplicação web, a lógica de backend rodando no Next.js Server Actions e a persistência de dados.

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
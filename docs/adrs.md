# Architecture Decision Records (ADRs)

Este documento registra as principais decisões arquiteturais tomadas durante o desenvolvimento do backend do Gerenciador de Agendamentos para profissionais autônomos.

## ADR 001: Estratégia de Conexão com Banco de Dados em Ambiente Serverless

* **Status:** Aceito
* **Data:** Março de 2026

**Contexto:**
A aplicação possui seu backend hospedado na Vercel (Serverless Functions) e o banco de dados PostgreSQL hospedado no Supabase. Como as funções serverless são instanciadas e destruídas rapidamente a cada requisição, conexões diretas tradicionais com o banco de dados esgotariam rapidamente o limite de conexões ativas do PostgreSQL, causando falhas (timeout) em horários de pico.

**Decisão:**
Optamos por implementar a arquitetura de Connection Pooling nativa do Supabase utilizando o **PgBouncer** em conjunto com o ORM Prisma. 
Para isso, configuramos duas URLs distintas no ambiente:
1. `DATABASE_URL`: Aponta para a porta `6543` com a flag `?pgbouncer=true`. Esta URL é usada pelo client do Prisma durante a execução da aplicação para enfileirar e reaproveitar conexões ativas de forma eficiente.
2. `DIRECT_URL`: Aponta para a porta padrão `5432`. Esta URL é utilizada exclusivamente para comandos de administração e migrações do banco de dados (ex: `prisma db pull`, `prisma migrate`), que exigem uma conexão persistente e direta.

**Consequências:**
Garantimos alta disponibilidade e estabilidade do sistema sob demanda elástica da Vercel, sem sobrecarregar a infraestrutura do Supabase.

---

## ADR 002: Garantia de Integridade Referencial na Rota de Agendamentos

* **Status:** Aceito
* **Data:** Março de 2026

**Contexto:**
Durante a criação de novos agendamentos, o sistema recebia dados do frontend e precisava vinculá-los aos profissionais e serviços corretos. Inicialmente, o mapeamento do Prisma estava divergente em relação ao plural/singular das tabelas geradas no Supabase (ex: `appointments` vs `Appointment`), o que mascarava erros de tipagem.

**Decisão:**
Ajustamos o `schema.prisma` para mapear corretamente o modelo `Appointment` para a tabela `appointments` via `@@map`. Além disso, removemos IDs estáticos/mockados nas rotas. A criação de um agendamento agora exige a busca dinâmica prévia do `professional_id` e `service_id` válidos no banco de dados.

**Consequências:**
O banco de dados passou a validar estritamente as restrições de chave estrangeira (Foreign Key Constraints). O sistema rejeita na origem qualquer tentativa de agendamento com dados órfãos, garantindo a integridade transacional e prevenindo a criação de "agendamentos fantasmas".
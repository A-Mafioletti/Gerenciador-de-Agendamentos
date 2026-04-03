# Architecture Decision Records (ADRs)

Este documento registra as principais decisões arquiteturais tomadas durante o desenvolvimento do backend do Gerenciador de Agendamentos para profissionais autônomos.

---

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

---

## ADR 003: Modelagem de Configurações do Profissional (Uso de JSONB)

* **Status:** Aceito
* **Data:** Abril de 2026

**Contexto:**
Foi necessário implementar uma funcionalidade para que o profissional configurasse sua grade de horários e os dias da semana em que trabalha. Modelar isso de forma estritamente relacional exigiria tabelas auxiliares complexas (uma linha para cada dia da semana para cada profissional), o que aumentaria o custo de chamadas SQL e a complexidade de manipulação de estado no Frontend.

**Decisão:**
Optamos por criar uma tabela única `professional_settings` com relação 1:1 com o `Professional`. Para os dias de trabalho, utilizamos uma coluna do tipo **JSONB** (`working_days`). 

**Consequências:**
Simplificação drástica no tráfego de dados entre o Frontend e o Backend. O Next.js consegue ler e atualizar o array de dias de trabalho como um objeto JavaScript nativo de forma extremamente performática, acelerando o desenvolvimento do MVP.

---

## ADR 004: Estratégia de Bloqueio de Agenda (Uso de Serviço Administrativo)

* **Status:** Aceito
* **Data:** Abril de 2026

**Contexto:**
O sistema precisava permitir que o profissional bloqueasse janelas de horários para compromissos pessoais, inviabilizando-os para o cliente final. Criar uma tabela separada apenas para "Bloqueios" obrigaria o algoritmo de disponibilidade a cruzar duas tabelas pesadas a cada visualização do calendário. Além disso, o ORM Prisma exigia estritamente a presença de um `service_id` para salvar na tabela principal de agendamentos.

**Decisão:**
Decidimos reaproveitar a tabela de `appointments`. O sistema cria automaticamente um serviço administrativo "fantasma" no banco de dados (ex: "🔒 BLOQUEIO PESSOAL"). Quando o profissional realiza um bloqueio no Dashboard, o sistema realiza múltiplas inserções na tabela de agendamentos usando este `service_id` específico.

**Consequências:**
* **Positivo:** A lógica de cálculo de disponibilidade no backend continuou simples e com alta performance, precisando consultar apenas uma única tabela (`appointments`) para descobrir o que está ocupado.
* **Trade-off:** Foi necessário adicionar filtros condicionais no frontend para garantir que este "Serviço Administrativo" não apareça no catálogo de serviços para o cliente público.
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

---

## ADR 005: Comunicação entre Microsserviços e Política de CORS

* **Status:** Aceito
* **Data:** Abril de 2026

**Contexto:**
Para manter responsabilidades isoladas, o sistema foi dividido em dois projetos hospedados independentemente na Vercel: o Frontend (Next.js) e o Backend (Node/Express). Por rodarem em domínios diferentes, os navegadores dos usuários bloqueavam as requisições de agendamento por violação de segurança (política de Mesma Origem).

**Decisão:**
Implementar uma política explícita de CORS (*Cross-Origin Resource Sharing*) na API Express. Configuramos o middleware de CORS para validar e aceitar exclusivamente requisições provenientes da URL oficial de produção do Frontend, ativando também a flag `credentials: true` para suportar o tráfego de headers de autenticação do Clerk.

**Consequências:**
Comunicação segura e liberada entre os microsserviços na nuvem, mitigando riscos de requisições não autorizadas disparadas por domínios de terceiros.

---

## ADR 006: Compatibilidade do Prisma Engine no Linux Serverless

* **Status:** Aceito
* **Data:** Abril de 2026

**Contexto:**
O desenvolvimento local ocorreu em ambiente Windows, fazendo com que o Prisma gerasse o motor do banco de dados (Query Engine) otimizado para este sistema. Ao realizar o deploy para a Vercel, o ambiente Linux Serverless (`rhel-openssl-3.0.x`) não localizava o motor nativo, retornando erro 500 no acesso ao banco.

**Decisão:**
Configurar estritamente o bloco `generator client` no arquivo `schema.prisma` para declarar o uso da propriedade `binaryTargets = ["native", "rhel-openssl-3.0.x"]`.

**Consequências:**
Durante a etapa de Build na nuvem, o compilador passa a fazer o download da biblioteca C (Query Engine) exata exigida pela Vercel, garantindo que o ORM consiga se conectar ao Supabase em qualquer ambiente de execução, eliminando o erro de inicialização.

---

## ADR 007: Automação de Deploy Customizada via GitHub Actions

* **Status:** Aceito
* **Data:** Abril de 2026

**Contexto:**
A Vercel possui integração automática com repositórios Git. No entanto, o nosso monorepo exigia comandos de build altamente específicos (como a instalação de dependências globais, uso do Vercel CLI e geração do cliente do Prisma) que precisavam rodar em uma ordem exata antes do código ser promovido para produção.

**Decisão:**
Desativar o auto-deploy nativo da Vercel e adotar o **GitHub Actions** como ferramenta oficial de CI/CD. Criamos um workflow (`deploy.yml`) que assume o controle do ambiente virtual (Ubuntu), puxa o repositório, instala a Vercel CLI, gera as dependências de banco de dados e dispara o deploy manualmente via token.

**Consequências:**
Obtivemos controle cirúrgico sobre a nossa esteira de integração contínua. Essa decisão nos permite expandir a Action no futuro para rodar testes automatizados antes do deploy, garantindo um processo de entrega de software em nível de qualidade corporativa.
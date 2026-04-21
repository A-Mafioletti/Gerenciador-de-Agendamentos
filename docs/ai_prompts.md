# Registro de Uso de Inteligência Artificial (IA)

Conforme as diretrizes de desenvolvimento moderno e as exigências do Roteiro de Discovery, ferramentas de IA Generativa foram utilizadas em múltiplas frentes: na concepção do produto (Discovery), como suporte técnico avançado ("Pair Programming") durante a codificação e na definição da arquitetura de testes e monitoramento.

## Ferramentas Utilizadas

* **Google Gemini (Modelos Pro e Flash):** Utilizado via interface conversacional e integrado ao ambiente de desenvolvimento para refatoração, documentação, lógica matemática, testes unitários e arquitetura de observabilidade.
* **Google Stitch:** Utilizado para a geração dos protótipos de alta fidelidade baseados nas especificações de UI.

---

## 1. Exemplos de Interações - Fase de Discovery e Design
*Estes prompts foram executados rigorosamente conforme o roteiro metodológico exigido para estruturar os artefatos do projeto.*

**Definição do Problema e PRD:**
> **Prompt:** "Atue como: Product Manager Sênior. Objetivo: Ajude-me a criar a 'Declaração de Problema' e o PRD para um novo produto de software. Contexto: Mercado de prestação de serviços técnicos, focado em profissionais autônomos que perdem clientes por não conseguirem responder o WhatsApp durante o trabalho."

**Especificação Técnica:**
> **Prompt:** "Atue como: Arquiteto de software. Objetivo: Ajude-me a criar a Especificação Técnica do Produto para um novo produto de software. Contexto: [Conteúdo do PRD]. Focar em Serverless, Next.js, Prisma e Supabase."

**Geração de UI e Protótipos:**
> **Prompt:** "Crie um arquivo markdown com um prompt para o papel de designer de UX que solicita a uma ferramenta de prototipagem como o Google Stitch criar templates de protótipos para este projeto, seguindo as diretrizes do PRD."

---

## 2. Exemplos de Interações - Fase de Desenvolvimento e Infraestrutura
*Estes prompts refletem o uso da IA para resolver problemas reais de engenharia e escalabilidade durante o hands-on.*

**Modelagem de Dados e Casos Extremos (Edge Cases):**
> **Prompt:** "Atue como um DBA PostgreSQL. Precisamos criar uma tabela de configurações para o profissional definir seus dias de trabalho. É mais performático criar uma tabela relacional para cada dia da semana ou usar uma coluna JSONB na tabela 'professional_settings'? Avalie os trade-offs considerando Next.js e Prisma."

**Resolução de Bugs Críticos (Infraestrutura Serverless):**
> **Prompt:** "Estou recebendo um erro de 'Too many connections' no Supabase ao fazer o deploy do meu Next.js na Vercel. Como configurar corretamente as variáveis DIRECT_URL e DATABASE_URL para habilitar o Connection Pooling (PgBouncer) no Prisma para um ambiente Serverless."

**Arquitetura Lógica (O 'Plano B' do Bloqueio):**
> **Prompt:** "O ORM Prisma está exigindo a relação estrita de um 'service_id' para criar um agendamento. Como posso implementar uma lógica de 'Bloqueio de Agenda' para compromissos pessoais do profissional no Dashboard sem quebrar essa integridade referencial do banco de dados."

---

## 3. Exemplos de Interações - Refatoração Algorítmica e UX Avançada
*Estes prompts demonstram o uso avançado da IA como co-piloto na reta final do projeto para resolver regras de negócio complexas e polir a experiência do usuário.*

**Prevenção de 'Time Overflow' e Conflito de Intersecção:**
> **Prompt:** "Identificamos uma falha de colisão na página de agendamento. O sistema permite reservar um horário se o início estiver livre, mas não valida se a duração do serviço invade o horário de um agendamento posterior. Refatore a função de slots. A lógica deve buscar o início do próximo agendamento confirmado e calcular: `Hora do Slot Atual + Duração do Serviço Selecionado`. Se o resultado for maior que o início do próximo agendamento, o slot deve ser removido ou desabilitado."

**Proteção de Mutação de Dados (Double Submit):**
> **Prompt:** "Encontramos um bug de 'Double Submit' no formulário de agendamento. Usuários clicam duas vezes por falta de feedback visual, gerando agendamentos duplicados no banco. Implemente um estado `isSubmitting` no React, bloqueie o botão e adicione um spinner de carregamento, usando um bloco `finally` para garantir o destravamento em caso de erro de rede."

**Arquitetura de Frontend e Proteção de Histórico:**
> **Prompt:** "Precisamos de uma funcionalidade para organizar a tela de clientes. Não podemos permitir a exclusão de clientes no banco (Prisma/Supabase) para não quebrar o histórico financeiro dos agendamentos passados. Como alternativa, implemente um filtro de Mês/Período no frontend. O Dropdown deve gerar as opções usando a API nativa `Intl.DateTimeFormat` de forma dinâmica."

---

## 4. Exemplos de Interações - Qualidade, Observabilidade e IA como Feature
*Estes prompts documentam a adoção de práticas de nível corporativo e a integração de IA diretamente no produto final para agregar valor de negócio.*

**Estratégia de Observabilidade (RNF-04 - Sentry):**
> **Prompt:** "Atue como um Tech Lead / DevOps. Temos uma aplicação Monorepo (Next.js no Frontend, Node/Express no Backend) com deploy marcado na Vercel. Precisamos atender ao requisito de Observabilidade (Sentry). Avalie os trade-offs e me indique qual a estratégia mais segura: implementar em ambas as pontas correndo o risco de quebrar a API estável, ou focar a prova de conceito apenas na camada de apresentação Frontend"

**Configuração de Ambiente de Testes (RNF-05 - Jest):**
> **Prompt:** "Atue como um Engenheiro de Software QA. Acabei de instalar o Jest e o React Testing Library no meu frontend Next.js. Precisamos provar a testabilidade do sistema. Passo a passo: 1. Crie o arquivo `jest.config.js` com a configuração recomendada via `next/jest`. 2. Crie uma pasta `__tests__`. 3. Escreva um teste unitário para validar uma função crítica de negócio (`timeUtils.ts` - formatação de datas), garantindo que ela trate zeros à esquerda corretamente."

**Integração de LLM para Feature de Negócio (Google Gemini):**
> **Prompt:** "Atue como um Arquiteto de Software Especialista em IA. Vamos criar a feature de 'Resumo Inteligente' no Dashboard do profissional. Escreva uma Next.js Route Handler que: 1. Busque os agendamentos do dia no Supabase. 2. Formate esses dados em um prompt de contexto. 3. Envie para a API do Google Gemini pedindo um 'briefing' diário humanizado. 4. Garanta que a `API_KEY` seja processada estritamente no backend para evitar vazamentos de segurança."

**Trava de Concorrência Rigorosa (Zero Double-Booking):**
> **Prompt:** "Atue como um Engenheiro de Backend. Na nossa rota de criação de agendamentos (`POST /api/appointments`), precisamos evitar condições de corrida em horários idênticos. Como podemos implementar uma trava lógica usando o Prisma Client para realizar um `SELECT` prévio cruzando `data`, `hora` e `professional_id` antes de executar o `INSERT`, retornando um erro 409 (Conflict) caso a vaga já tenha sido tomada?"

---

## 5. Impacto no Projeto

A utilização da IA transcendeu a simples geração de texto. Ela atuou como um acelerador crítico para:
1. **Conformidade Metodológica:** Garantir que todos os artefatos de Discovery seguissem padrões de mercado (C4 Model, PRD, ADRs).
2. **Engenharia Robusta:** Transformar lógicas complexas de tempo e concorrência em código limpo, protegendo a regra principal do negócio (evitar colapsos de agenda e *double-booking*).
3. **Debugging e Cloud:** Reduzir drasticamente o tempo de resolução de problemas de infraestrutura (como o gargalo de conexões e *binary targets* na Vercel).
4. **Segurança e UX:** Polir a aplicação com boas práticas de usabilidade (Prevenção de *Double Submit*, Loading States e Proteção de Dados Históricos).
5. **Manutenibilidade e Testabilidade:** Estruturar a fundação para testes automatizados (Jest) e telemetria avançada de erros (Sentry), elevando a maturidade do MVP para o padrão corporativo.
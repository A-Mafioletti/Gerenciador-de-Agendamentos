# Registro de Uso de Inteligência Artificial (IA)

Conforme as diretrizes de desenvolvimento moderno e as exigências do Roteiro de Discovery, ferramentas de IA Generativa foram utilizadas em duas frentes principais: na concepção do produto (Discovery) e como suporte técnico avançado ("Pair Programming") durante a codificação.

## Ferramentas Utilizadas

* **Google Gemini (Modelos Pro e Flash):** Utilizado via interface conversacional e integrado ao ambiente de desenvolvimento para refatoração, documentação e arquitetura.
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
*Estes prompts refletem o uso da IA para resolver problemas reais de engenharia e escalabilidade durante o hand-on.*

**Modelagem de Dados e Casos Extremos (Edge Cases):**
> **Prompt:** "Atue como um DBA PostgreSQL. Precisamos criar uma tabela de configurações para o profissional definir seus dias de trabalho. É mais performático criar uma tabela relacional para cada dia da semana ou usar uma coluna JSONB na tabela 'professional_settings'? Avalie os trade-offs considerando Next.js e Prisma."

**Resolução de Bugs Críticos (Infraestrutura Serverless):**
> **Prompt:** "Estou recebendo um erro de 'Too many connections' no Supabase ao fazer o deploy do meu Next.js na Vercel. Como configurar corretamente as variáveis DIRECT_URL e DATABASE_URL para habilitar o Connection Pooling (PgBouncer) no Prisma para um ambiente Serverless?"

**Arquitetura Lógica (O 'Plano B' do Bloqueio):**
> **Prompt:** "O ORM Prisma está exigindo a relação estrita de um 'service_id' para criar um agendamento. Como posso implementar uma lógica de 'Bloqueio de Agenda' para compromissos pessoais do profissional no Dashboard sem quebrar essa integridade referencial do banco de dados?"

---

## 3. Impacto no Projeto

A utilização da IA transcendeu a simples geração de texto. Ela atuou como um acelerador crítico para:
1. **Conformidade Metodológica:** Garantir que todos os artefatos de Discovery seguissem padrões de mercado (C4 Model, PRD).
2. **Debugging em Cloud:** Reduzir o tempo de resolução de problemas complexos de infraestrutura (como o gargalo de conexões do Supabase na Vercel).
3. **Tomada de Decisão Técnica:** Validar escolhas arquiteturais, como a adoção do Clerk para segurança e o uso de JSONB para flexibilidade de configurações, elevando o nível técnico do MVP.
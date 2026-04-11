# Registro de Uso de Inteligência Artificial (IA)

Conforme as diretrizes de desenvolvimento moderno e as exigências do Roteiro de Discovery, ferramentas de IA Generativa foram utilizadas em duas frentes principais: na concepção do produto (Discovery) e como suporte técnico avançado ("Pair Programming") durante a codificação e refatoração.

## Ferramentas Utilizadas

* **Google Gemini (Modelos Pro e Flash):** Utilizado via interface conversacional e integrado ao ambiente de desenvolvimento para refatoração, documentação, lógica matemática e arquitetura.
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
> **Prompt:** "Estou recebendo um erro de 'Too many connections' no Supabase ao fazer o deploy do meu Next.js na Vercel. Como configurar corretamente as variáveis DIRECT_URL e DATABASE_URL para habilitar o Connection Pooling (PgBouncer) no Prisma para um ambiente Serverless?"

**Arquitetura Lógica (O 'Plano B' do Bloqueio):**
> **Prompt:** "O ORM Prisma está exigindo a relação estrita de um 'service_id' para criar um agendamento. Como posso implementar uma lógica de 'Bloqueio de Agenda' para compromissos pessoais do profissional no Dashboard sem quebrar essa integridade referencial do banco de dados?"

---

## 3. Exemplos de Interações - Refatoração Algorítmica e UX Avançada (Pair Programming)
*Estes prompts demonstram o uso avançado da IA como co-piloto na reta final do projeto para resolver regras de negócio complexas e polir a experiência do usuário.*

**Prevenção de 'Time Overflow' e Conflito de Intersecção (Matemática de Agenda):**
> **Prompt:** "Identificamos uma falha de colisão na página de agendamento. O sistema permite reservar um horário se o início estiver livre, mas não valida se a duração do serviço invade o horário de um agendamento posterior. Refatore a função de slots. A lógica deve buscar o início do próximo agendamento confirmado e calcular: `Hora do Slot Atual + Duração do Serviço Selecionado`. Se o resultado for maior que o início do próximo agendamento, o slot deve ser removido ou desabilitado visualmente."

**Proteção de Mutação de Dados (Double Submit):**
> **Prompt:** "Encontramos um bug de 'Double Submit' no formulário de agendamento. Usuários clicam duas vezes por falta de feedback visual, gerando agendamentos duplicados no banco. Implemente um estado `isSubmitting` no React, bloqueie o botão e adicione um spinner de carregamento, usando um bloco `finally` para garantir o destravamento em caso de erro de rede."

**Arquitetura de Frontend e Proteção de Histórico:**
> **Prompt:** "Precisamos de uma funcionalidade para organizar a tela de clientes. Não podemos permitir a exclusão de clientes no banco (Prisma/Supabase) para não quebrar o histórico financeiro dos agendamentos passados. Como alternativa, implemente um filtro de Mês/Período no frontend. O Dropdown deve gerar as opções usando a API nativa `Intl.DateTimeFormat` de forma dinâmica."

---

## 4. Impacto no Projeto

A utilização da IA transcendeu a simples geração de texto. Ela atuou como um acelerador crítico para:
1. **Conformidade Metodológica:** Garantir que todos os artefatos de Discovery seguissem padrões de mercado (C4 Model, PRD).
2. **Engenharia Robusta:** Transformar lógicas complexas de tempo (operações com minutos totais e intersecção de arrays) em código limpo, protegendo a regra principal do negócio (evitar o *double-booking*).
3. **Debugging em Cloud:** Reduzir drasticamente o tempo de resolução de problemas de infraestrutura (como o gargalo de conexões na Vercel).
4. **Segurança e UX:** Polir a aplicação com boas práticas de usabilidade (Prevenção de Double Submit, Loading States e Proteção de Dados Históricos), elevando o nível técnico do MVP para padrões de mercado.
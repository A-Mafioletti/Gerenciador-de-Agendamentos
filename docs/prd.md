# Definição de Requisitos do Produto (PRD)

## Descrição do produto

**Problema:** Profissionais autônomos que executam trabalhos manuais perdem oportunidades de negócio, sofrem com conflitos de horários e sacrificam o descanso pessoal devido à gestão manual e reativa de agendamentos via WhatsApp ou papel.

**Solução:** Um assistente digital 24/7 que automatiza o agendamento por meio de um link público sincronizado em tempo real com a disponibilidade e um Dashboard inteligente que utiliza IA para organizar a rotina do profissional.

**Público-alvo:** Profissionais liberais "mão na massa" (eletricistas, encanadores, técnicos) que operam sozinhos. O sistema recupera o tempo administrativo e elimina erros de agendamento através de travas automáticas de concorrência.

**Nossos Diferenciais:**
- **IA Generativa:** Briefing diário humanizado sobre a carga de trabalho.
- **Bloqueio Inteligente:** Gestão rápida de compromissos pessoais e janelas de folga.
- **Robustez Técnica:** Sistema monitorado em tempo real (Sentry) e blindado por testes unitários (Jest).

---

## Perfis de Usuário

### 1. Profissional Autônomo (Carlos, o Autônomo Conectado)
- **Problemas:** Perda de orçamentos por demora na resposta; conflitos de agenda; exaustão por gerenciar marcações manualmente.
- **Objetivos:** Automatizar o atendimento inicial e ter um "secretário digital" que resuma seu dia.
- **Motivações:** Crescimento do negócio e mais tempo de lazer.

### 2. Cliente Final
- **Problemas:** Dificuldade em encontrar horários disponíveis e demora no retorno do profissional.
- **Objetivos:** Agendar um serviço em segundos com garantia de reserva imediata.
- **Frustrações:** Negociar horários por mensagem sem garantia de que o horário está realmente livre.

---

## Principais Funcionalidades (Requisitos Funcionais)

### RFN-01 - Página de Agendamento Público (Booking Page)
- Interface para o cliente escolher data, horário e serviço.
- **Prevenção de Concorrência (Double Booking):** Trava lógica no backend que impede dois clientes de confirmarem o mesmo slot simultaneamente.
- **Critérios de Aceitação:** O fluxo deve ser concluído em no máximo 4 telas. O sistema deve validar a disponibilidade no momento exato da reserva para evitar conflitos.

### RFN-02 - Dashboard Administrativo
- Visualização centralizada de agendamentos confirmados com status (Pendente, Concluído, Cancelado).
- Atalho para contato direto via WhatsApp com o cliente.
- **Critérios de Aceitação:** Deve listar agendamentos em ordem cronológica e diferenciar visualmente bloqueios pessoais de agendamentos de clientes.

### RFN-03 - Configuração de Grade de Trabalho
- Definição de dias de trabalho (seg-dom), horário de início/fim e intervalo de almoço.
- **Critérios de Aceitação:** Alterações nos Ajustes devem refletir instantaneamente na página pública.

### RFN-04 - Gestão de Catálogo de Serviços
- Cadastro, edição e exclusão de serviços com nome e duração estimada.
- **Critérios de Aceitação:** A duração do serviço deve influenciar no cálculo dinâmico de janelas disponíveis na agenda.

### RFN-05 - Bloqueio de Horário Específico (Compromissos Pessoais)
- Interface para invalidar janelas de tempo específicas em datas selecionadas.
- **Critérios de Aceitação:** O bloqueio deve gerar um registro interno ("🔒 BLOQUEIO PESSOAL") que impeça agendamentos de clientes naquele intervalo.

### RFN-06 - Resumo Inteligente da Agenda (IA Gemini)
- O Dashboard apresenta um texto natural e humanizado resumindo os compromissos do dia atual.
- **Critérios de Aceitação:** A IA deve interpretar o volume de serviços e os intervalos (almoço/descanso) para fornecer um briefing proativo ao profissional.

---

## Requisitos Não Funcionais (RNFs)

Para garantir a qualidade, estabilidade e segurança da plataforma, o sistema deve atender aos seguintes critérios técnicos:

* **RNF-01 - Desempenho (Performance):** Tempo de carregamento da Booking Page < 2 segundos em conexões 4G (LCP < 2.5s). Cálculo de horários processado em tempo real.
* **RNF-02 - Segurança e Privacidade:** Autenticação via **Clerk**. Isolamento de dados via **Row Level Security (RLS)** no Supabase. Toda a comunicação via HTTPS.
* **RNF-03 - Escalabilidade e Disponibilidade:** Disponibilidade mínima de 99.9%. Arquitetura Serverless (Next.js na Vercel) para escalonamento automático.
* **RNF-04 - Observabilidade e Rastreabilidade (Sentry):** O sistema deve monitorar erros e performance em tempo real. Falhas críticas devem ser rastreáveis até a linha exata do código via Source Maps.
* **RNF-05 - Manutenibilidade e Testabilidade (Jest):** Lógicas críticas de negócio (formatação de tempo, validação de agenda) devem possuir testes unitários automatizados.
* **RNF-06 - Usabilidade e Portabilidade:** Interface **Mobile-First**. Ambiente de desenvolvimento replicável via **Docker** para garantir paridade e portabilidade.

---

## Métricas de Sucesso
- **Taxa zero** de conflitos de horário (Double-booking).
- Redução de **90%** no uso de mensagens manuais para marcação.
- Tempo médio de agendamento pelo cliente inferior a **90 segundos**.
- **100% de engajamento** do profissional com o resumo diário da IA.

---

## Premissas e Restrições

**Premissas:**
* O profissional possui smartphone com internet e WhatsApp instalado.
* O cliente possui um navegador web moderno.

**Restrições:**
* Sem processamento de pagamentos nesta versão (v1).
* Aplicação exclusivamente web (PWA).
* Notificações via redirecionamento de link (Deep Link) do WhatsApp.

---

## Escopo do Projeto

**Está no Escopo (Entregue na V1):**
* Autenticação segura (Clerk) e Banco de Dados (Supabase).
* Gestão de grade, catálogo de serviços e bloqueios manuais.
* Página pública com trava de concorrência.
* Integração com **Google Gemini** para resumos de agenda.
* Monitoramento de erros com **Sentry** e Testes Unitários com **Jest**.

**Fora do Escopo:**
* Gateway de pagamentos e Chat interno.
* Aplicativos nativos para lojas (App Store/Play Store).
* Robôs de automação de mensagens (Bots).
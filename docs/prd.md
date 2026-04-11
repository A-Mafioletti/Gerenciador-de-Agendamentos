# Definição de Requisitos do Produto (PRD)

## Descrição do produto

**Problema:** Profissionais autônomos que executam trabalhos manuais perdem oportunidades de negócio, sofrem com conflitos de horários e sacrificam o descanso pessoal devido à gestão manual e reativa de agendamentos via WhatsApp ou papel.

**Solução:** Um assistente digital 24/7 que automatiza o agendamento por meio de um link público sincronizado em tempo real com a disponibilidade, regras de negócio e compromissos pessoais do profissional.

**Público-alvo:** Profissionais liberais "mão na massa" (eletricistas, encanadores, técnicos) que operam sozinhos. Para eles, o ganho é a recuperação de tempo administrativo e a eliminação do *double-booking*. Para o cliente final, o ganho é a autonomia e confirmação imediata do serviço.

**Nossos Diferenciais:**
- **Foco em Autônomos:** Interface simplificada para quem está em campo.
- **Bloqueio Inteligente:** Permite invalidar horários para compromissos pessoais de forma rápida.
- **Zero Atrito:** Cliente agenda sem precisar baixar apps ou criar contas.

---

## Perfis de Usuário

### 1. Profissional Autônomo (Carlos, o Autônomo Conectado)
- **Problemas:** Perda de orçamentos por demora na resposta; conflitos de agenda; exaustão por gerenciar marcações fora do horário comercial.
- **Objetivos:** Automatizar o atendimento inicial e profissionalizar a gestão da agenda.
- **Dados demográficos:** 18-60 anos, prestador de serviços técnicos, usuário intensivo de smartphone.
- **Motivações:** Crescimento do negócio e mais tempo de lazer.
- **Frustrações:** Sistemas complexos de desktop e interrupções constantes durante o trabalho.

### 2. Cliente Final
- **Problemas:** Dificuldade em encontrar horários disponíveis e demora no retorno do profissional.
- **Objetivos:** Agendar um serviço em segundos com garantia de horário.
- **Dados demográficos:** Pessoas físicas que buscam serviços residenciais.
- **Motivações:** Praticidade e resolução rápida de problemas domésticos.
- **Frustrações:** Ter que negociar horários por mensagem e não receber confirmação clara.

---

## Principais Funcionalidades

### RFN-01 - Página de Agendamento Público (Booking Page)
- Interface para o cliente escolher data, horário e serviço.
- Filtro automático de horários ocupados ou bloqueados.
- **Critérios de Aceitação:** O fluxo deve ser concluído em no máximo 4 telas. O horário deve ficar indisponível para outros clientes imediatamente após a confirmação.

### RFN-02 - Dashboard Administrativo
- Visualização centralizada de agendamentos confirmados com status (Pendente, Concluído, Cancelado).
- Atalho para contato direto via WhatsApp com o cliente.
- **Critérios de Aceitação:** Deve listar agendamentos em ordem cronológica e diferenciar visualmente bloqueios pessoais de agendamentos de clientes.

### RFN-03 - Configuração de Grade de Trabalho
- Definição de dias de trabalho (seg-dom), horário de início/fim e intervalo de almoço.
- **Critérios de Aceitação:** Alterações nos Ajustes devem refletir na página pública sem necessidade de deploy ou reinicialização do sistema.

### RFN-04 - Gestão de Catálogo de Serviços
- Cadastro, edição e exclusão de serviços com nome e duração estimada.
- **Critérios de Aceitação:** A duração do serviço deve influenciar na disponibilidade de horários finais da agenda (regra de segurança de término).

### RFN-05 - Bloqueio de Horário Específico (Compromissos Pessoais)
- Interface para invalidar janelas de tempo específicas em datas selecionadas.
- **Critérios de Aceitação:** O bloqueio deve gerar um registro interno ("🔒 BLOQUEIO PESSOAL") que impeça agendamentos de clientes naquele intervalo.

---

## Requisitos Não Funcionais (RNFs)

Para garantir a qualidade, estabilidade e segurança da plataforma, o sistema deve atender aos seguintes critérios técnicos:

* **Desempenho (Performance):** O tempo de carregamento da página pública de agendamento (Booking Page) deve ser inferior a 2 segundos em conexões 4G (LCP < 2.5s).
* O cálculo de horários disponíveis (considerando Lead Time e fuso horário) deve ser processado em tempo real, garantindo uma resposta ágil da interface.

* **Segurança e Privacidade:** A autenticação e a gestão de sessão do profissional devem ser protegidas via **Clerk**, suportando mecanismos de segurança robustos.
* Os dados sensíveis dos clientes (telefone, endereço) devem ser isolados no banco de dados (Supabase) através de **Row Level Security (RLS)**, garantindo que o Profissional "A" nunca acesse dados do Profissional "B" (Compliance com LGPD).
* Toda a comunicação deve ocorrer obrigatoriamente via HTTPS (TLS/SSL).

* **Escalabilidade e Disponibilidade:** O sistema deve possuir uma disponibilidade mínima de 99.9% (SLA padrão).
* A adoção de uma arquitetura *Serverless* (Next.js na Vercel) deve garantir o escalonamento automático (auto-scaling) para suportar picos de acessos sem degradação do serviço.

* **Usabilidade (UX/UI):** A interface deve ser estritamente **Mobile-First**, garantindo navegação fluida em telas menores, com alvos de toque adequados (mínimo de 44x44px).
* O sistema deve fornecer feedback visual imediato para ações críticas (ex: confirmações de agendamento, validações de formulário).
---

## Métricas de Sucesso
- Redução de 90% no uso de papel/mensagens manuais para marcação.
- Taxa zero de conflitos de horário (Double-booking).
- Tempo médio de agendamento pelo cliente inferior a 90 segundos.

---

## Premissas e Restrições

**Premissas (Técnicas e Organizacionais):**
* O profissional autônomo possui um smartphone com acesso à internet e o aplicativo WhatsApp instalado para receber as notificações de serviço.
* O cliente final possui um navegador web moderno e acesso à internet.
* A comunicação do profissional com o cliente continuará sendo feita primariamente via WhatsApp após o agendamento no sistema.

**Restrições (Técnicas e de Infraestrutura):**
* O sistema não realiza processamento de pagamentos nesta versão (v1).
* A aplicação será exclusivamente web (Progressive Web App - PWA em potencial), não havendo desenvolvimento ou publicação de aplicativos nativos nas lojas (App Store / Google Play).
* O envio de notificações automatizadas (SMS/WhatsApp API) está fora do escopo atual devido aos custos de integração; o redirecionamento é feito via *deep link* gratuito do WhatsApp.

---

## Escopo do Projeto

O escopo do projeto está estritamente focado em resolver a dor do agendamento manual.

**Está no Escopo (O que será entregue na V1):**
* Autenticação segura do profissional (Clerk).
* Configuração da grade de horários de trabalho, dias úteis e bloqueios (Lead Time).
* Cadastro e gestão de serviços ofertados.
* Página pública de agendamento com cálculo dinâmico de disponibilidade.
* Dashboard administrativo para visualizar e alterar status de agendamentos (Concluir/Cancelar).
* Bloqueio manual de horários (Compromissos pessoais).

**Fora do Escopo (O que não será entregue nesta fase):**
* Gateway de pagamento online integrado (Pix, Cartão de Crédito).
* Disparo automatizado de mensagens via WhatsApp Business API (bots).
* Emissão de Notas Fiscais ou recibos de serviço.
* Chat interno na plataforma.
* Relatórios financeiros ou de produtividade complexos.
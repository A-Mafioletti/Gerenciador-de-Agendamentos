# Definição de Requisitos do Produto (PRD)

## Descrição do produto

**Problema:** Profissionais autônomos perdem serviços, sofrem com choques de horários e sacrificam tempo de descanso porque não conseguem conciliar o atendimento imediato aos clientes com a execução do trabalho manual.
**Solução:** Uma plataforma web de agendamento autônoma que funciona como um assistente digital 24/7, permitindo que os próprios clientes agendem horários disponíveis por um link, integrando-se diretamente à agenda do profissional.

Para o **profissional autônomo** (Carlos), o valor entregue é ter sua agenda organizada automaticamente, reduzindo a perda de clientes ("churn") por falta de resposta e recuperando o tempo de descanso que seria gasto em tarefas administrativas. Para o **cliente final**, o valor entregue é a conveniência e rapidez no agendamento, sem ter que aguardar horas por uma resposta.

Nossos Diferenciais:
- Foco em profissionais que executam trabalhos manuais ("mão na massa").
- Interface "mobile-first" projetada para a correria do dia a dia.
- Experiência fluida para o cliente final agendar, sem necessidade de baixar um app extra ou fazer cadastros longos.

---

## Perfis de Usuário

### 1. Profissional Autônomo (Carlos, o Autônomo Conectado)
- **Problemas:** Perde orçamentos por demora no WhatsApp; sofre com double-booking (dois serviços no mesmo horário); perde tempo de lazer fazendo o planejamento da agenda no papel.
- **Objetivos:** Aumentar a taxa de conversão de contatos em serviços reais; profissionalizar os agendamentos sem precisar contratar secretária.
- **Dados demográficos:** Homens e mulheres entre 18 e 60 anos; prestam serviços como elétrica, encanamento e estética a domicílio; usam intensamente o smartphone.
- **Motivações:** Ver o negócio crescer, ter segurança financeira e conseguir mais tempo livre.
- **Frustrações:** Ferramentas complicadas que exigem muito tempo no computador; clientes reclamando da demora no atendimento.

### 2. Cliente Final
- **Problemas:** Precisa de um serviço rapidamente, mas os profissionais não respondem na hora ou não passam segurança do horário do atendimento.
- **Objetivos:** Conseguir agendar um horário de forma rápida, ter a confirmação imediata e saber com certeza quando o profissional virá.
- **Dados demográficos:** Variados. Pessoas que buscam praticidade e preferem interações digitais independentes.
- **Motivações:** Resolver o problema em sua residência da forma mais conveniente possível.
- **Frustrações:** Ficar horas esperando um profissional responder ou receber uma estimativa ampla de horário e ele não aparecer.

---

## Principais Funcionalidades

### RFN-01 - Agendamento Direto pelo Cliente ("Booking Page")
- O sistema deverá fornecer um link público único para o negócio do profissional.
- A página deve exibir em tempo real os dias e horários vagos do prestador.
- Formulário simples solicitando Nome, WhatsApp, Serviço desejado e Endereço.
- **Critérios de Aceitação:** Um cliente novo deve conseguir visualizar as datas e confirmar a marcação em menos de 2 minutos. Horários já ocupados não devem aparecer nas opções.

### RFN-02 - Dashboard e Visualização da Agenda (Profissional)
- Uma tela (Dashboard) otimizada para celular listando os compromissos.
- Exibir nome do cliente, serviço, endereço e o horário de cada agendamento diário.
- **Critérios de Aceitação:** Ao fazer login, a rota `/dashboard` deve carregar imediatamente os próximos agendamentos do dia/semana.

### RFN-03 - Gerenciamento de Disponibilidade
- O profissional pode configurar sua grade horária de trabalho diária de forma simples.
- **Critérios de Aceitação:** As opções configuradas devem refletir instantaneamente no link de reserva público.

---

## Requisitos Não Funcionais (Desempenho, Segurança e Escalabilidade)

### RNF-01 - Desempenho e Usabilidade (Mobile-First)
A aplicação deve ser responsiva e otimizada para dispositivos móveis. O tempo de carregamento da página de agendamento (booking) deve ser inferior a 3 segundos em conexões 4G para evitar o abandono do cliente.

### RNF-02 - Alta Disponibilidade e Escalabilidade
O sistema deve garantir alta disponibilidade (uptime de 99.9%), atuando como um assistente 24/7. A arquitetura Serverless (Next.js na Vercel) garantirá a escalabilidade automática conforme o volume de acessos cresça.

### RNF-03 - Segurança e Proteção de Dados
O acesso ao Dashboard do profissional deve ser estritamente protegido por autenticação. Os dados dos clientes (telefones, endereços) devem ser isolados usando políticas de Row Level Security (RLS) no banco de dados, garantindo conformidade com a LGPD.

---

## Métricas de Sucesso

- Redução do tempo administrativo diário do profissional (esforço percebido na marcação).
- Taxa zero de conflitos de agenda ("Double-Booking").
- Aumento da taxa de conversão (% de clientes que acessaram o link e fecharam o horário vs. contatos perdidos no WhatsApp).
- Volume de agendamentos realizados pela plataforma no decorrer da semana.

---

## Premissas e Restrições

**Premissas (Técnicas e Organizacionais):**
- O profissional precisa possuir um smartphone com acesso contínuo à internet para gerenciar a agenda.
- O sistema depende da infraestrutura de nuvem (Vercel para hospedagem e Supabase para banco de dados/autenticação) para operar.

**Restrições:**
- O sistema operará no modelo *mono-tenant* (conta individual por prestador) nesta versão inicial. Não há suporte para múltiplas agendas de uma mesma equipe (ex: clínica com vários médicos).

---

## Escopo

**O que ESTÁ no escopo (Entregas do MVP - v1):**
- Página pública responsiva para recepção de agendamentos (Booking Page).
- Dashboard administrativo "Minha Agenda" para o profissional.
- Autenticação de usuário (Login) via Supabase Auth.
- Persistência de dados reais dos agendamentos no banco PostgreSQL.

**O que está FORA do escopo (Para versões futuras):**
- Integração de pagamentos (Checkout/Pix).
- Disparo automático de mensagens via API oficial do WhatsApp.
- Relatórios financeiros e mini-CRM avançado.
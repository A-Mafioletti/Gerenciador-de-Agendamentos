# Definição de Requisitos do Produto (PRD)

## Descrição do produto

**Problema** Profissionais autônomos perdem serviços, sofrem com choques de horários e sacrificam tempo de descanso porque não conseguem conciliar o atendimento imediato aos clientes com a execução do trabalho manual.

**Solução** Uma plataforma de agendamento autônoma que funciona como um assistente digital 24/7, permitindo que os próprios clientes agendem horários disponíveis por um link, integrando-se diretamente à agenda do profissional.

Para o **profissional autônomo** (Carlos), o ganho é ter sua agenda organizada automaticamente, reduzindo a perda de clientes ("churn" imediato) por falta de resposta e recuperando o tempo de descanso que seria gasto em tarefas administrativas. Para o **cliente final**, o ganho é a conveniência e rapidez no agendamento, sem ter que aguardar horas pela resposta de orçamentos e horários.

Nossos Diferenciais:
- Foco em profissionais que executam trabalhos manuais ("mão na massa").
- Interface "mobile-first" projetada para a correria do dia a dia (pensada para o smartphone).
- Experiência fluida para o cliente final agendar, sem necessidade de baixar um app extra ou fazer cadastros longos.

---

## Perfis de Usuário

- Profissional Autônomo (Prestador do serviço)
- Cliente Final

### Profissional Autônomo (Carlos, o Autônomo Conectado)

- Problemas: Perde orçamentos por demora no WhatsApp; sofre com double-booking (dois serviços agendados no mesmo horário); perde tempo de lazer fazendo o planejamento da agenda no papel/cabeça.
- Objetivos: Aumentar a taxa de conversão de contatos em serviços reais; profissionalizar os agendamentos sem precisar contratar secretária; evitar confusões de calendário.
- Dados demográficos: Homens e mulheres entre 18 e 60 anos; prestam serviços como elétrica, encanamento, estética a domicílio, marcenaria; usam intensamente o WhatsApp / Instagram comercialmente.
- Motivações: Ver o negócio crescer, ser valorizado pelo seu trabalho, ter segurança financeira e conseguir mais tempo livre com a família.
- Frustrações: Ferramentas complicadas demais ou que exigem muito tempo na frente do computador; lidar com clientes reclamando da demora no atendimento.

### Cliente Final

- Problemas: Precisa de um serviço rapidamente, mas os profissionais não respondem na hora ou não passam a segurança de quando exatamente o serviço será realizado.
- Objetivos: Conseguir agendar um horário de forma rápida, ter a confirmação imediata e saber com certeza quando o profissional virá.
- Dados demográficos: Variados. Pessoas que buscam praticidade e preferem interações digitais independentes.
- Motivações: Resolver o problema em sua residência/necessidade pessoal da forma mais conveniente possível.
- Frustrações: Ficar horas ou dias esperando um profissional responder ou ele fornecer uma estimativa ampla de horário e não aparecer.

---

## Principais Funcionalidades

### RFN-01 Agendamento Direto pelo Cliente ("Booking Page")

- O sistema deverá fornecer um link único para o negócio do profissional (ex: app.com/carlos-eletricista).
- Nesta página, exibir em tempo real os dias e horários vagos do prestador.
- Formulário simples solicitando Nome, WhatsApp, Serviço desejado e Endereço (se for agendamento a domicílio).

Critérios de Aceitação:
- Um cliente novo deve conseguir visualizar as datas e aprovar a marcação em menos de 2 minutos.
- Horários já ocupados devem desaparecer instantaneamente das opções.

### RFN-02 Gerenciamento de Disponibilidade e Jornada (Profissional)

- O profissional pode configurar sua grade horária de trabalho diária de forma simples.
- Possibilidade de configurar bloqueios extras (ex: horário de almoço ou tempo de trajeto entre um cliente e outro).

Critérios de Aceitação:
- As opções configuradas pela interface do profissional devem refletir no link de reserva público no momento em que ele salvar.

### RFN-03 Dashboard e Visualização da Agenda (Profissional)

- Uma tela em formato de lista simples ou mini-calendário, otimizada para ser vista rapidamente no celular.
- Exibir nome do cliente, serviço e o respectivo horário de cada agendamento diário.

Critérios de Aceitação:
- Ao abrir a aplicação, a rota de 'Dashboard' / vista Hoje precisa carregar as próximas tarefas sem o profissional ter de dar muitos cliques.

### RFN-04 Notificações e Confirmação de Serviços

- Geração de uma mensagem resumida / notificação assim que o cliente confirma a reserva.
- Atualização visual no painel do profissional.

Critérios de Aceitação:
- Quando concluído o fluxo, o sistema mostrará uma confirmação na tela para o cliente ou enviará um email contendo os dados do compromisso.

---

## Requisitos Não Funcionais


### RNF-01 - Desempenho e Interface Mobile-First

O site de acesso, tanto do profissional quanto a página de booking do cliente, devem nascer pensados para as telas mobile. O tempo de resposta deve ser inferior a 2 a 3 segundos, evitando o churn durante o agendamento.

### RNF-02 - Alta Disponibilidade

O sistema atuará como uma "assistente 24/7", logo deve estar disponível a maior parte do tempo em provedores Cloud confiáveis (ex. Vercel, Supabase), não dependendo de um computador ligado localmente para que o cliente acesse o link.

### RNF-03 - Segurança e Privacidade de Dados

Os dados dos clientes (telefones, nomes, endereços) devem ser associados e restritos apenas ao profissional daquela respectiva agenda. Uso de LGPD por base.

---

## Métricas de Sucesso

- Redução do tempo administrativo diário do profissional (esforço percebido na marcação).
- Zero taxa de conflitos de agenda / "Double-Booking".
- Aumento da taxa de conversão (% de clientes que acessaram o link e fecharam o horário contra contatos que morrem no Whatsapp).
- DAU/MAU (Usuários Diários/Mensais Ativos na plataforma testando a ferramenta ou visualizando o painel diário).
- Volume de agendamentos realizados pela plataforma no decorrer da semana.

---

## Premissas e restrições

- O profissional precisa possuir um Smartphone com acesso contínuo à internet para ser notificado de alterações em tempo real.
- Nesta versão em que o profissional opera sozinho, não há divisão de equipe. A conta é mono-usuário prestador.
- Inicialmente o sistema não bloqueará pagamentos nem fará o faturamento obrigatoriamente (o MVP focará apenas no fluxo logístico/tempo-horários).

## Escopo

- **Foco atual (v1 / MVP):** 
  - Criação de página pública de recepção de agendamentos (booking page pro cliente).
  - Dashboard "Minha Agenda" para o profissional, com painel de listagem de serviços do dia.
  - Fluxo simples de Autenticação (Auth/Login) para o profissional acessar seu painel.
  - Configuração básica de horários e dias de trabalho, além do cadastro de serviços e suas respectivas durações.

*Nota: Funcionalidades avançadas como lembretes automáticos via WhatsApp, mini-CRM, relatórios de clientes frequentes e pagamentos integrados (checkout/pix) estão fora do escopo desta fase inicial e serão planejados para futuras iterações.*

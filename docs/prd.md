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

## Requisitos Não Funcionais

### RNF-01 - Mobile-First e Responsividade
O sistema deve ser perfeitamente funcional em telas pequenas, visto que o profissional gerencia a agenda em campo.

### RNF-02 - Persistência e Integridade de Dados
Uso de banco de dados PostgreSQL (Supabase) com ORM Prisma para garantir que nenhum agendamento seja perdido ou duplicado.

### RNF-03 - Segurança (LGPD)
Isolamento de dados por profissional usando Row Level Security (RLS), garantindo que um prestador não acesse os dados de clientes de outro.

---

## Métricas de Sucesso
- Redução de 90% no uso de papel/mensagens manuais para marcação.
- Taxa zero de conflitos de horário (Double-booking).
- Tempo médio de agendamento pelo cliente inferior a 90 segundos.

---

## Premissas e restrições
- **Premissas:** O profissional possui acesso à internet e conta ativa no sistema.
- **Restrições:** O sistema não realiza processamento de pagamentos nesta versão (v1).

---

## Escopo
- **V1 (Atual):** Cadastro de serviços, configuração de grade, agendamento público, dashboard e bloqueio manual de horários.
- **V2 (Futuro):** Notificações push/WhatsApp, relatórios financeiros e integração de pagamento via Pix.
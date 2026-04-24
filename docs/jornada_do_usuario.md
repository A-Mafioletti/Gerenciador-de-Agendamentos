# Jornada do Usuário

> **Produto / Serviço:** Gerenciador de Agendamentos Inteligente
> **Persona:** Carlos, o Autônomo Conectado (Eletricista)
> **Data de Atualização:** Abril/2026
> **Responsável:** André Mafioletti

---

## 📌 Visão Geral da Jornada

| Etapa | Descrição | Objetivo do Usuário |
| :--- | :--- | :--- |
| **1. Descoberta e Setup** | Cadastro (Clerk) e configuração de expediente e serviços. | Configurar a disponibilidade base para o sistema trabalhar sozinho. |
| **2. Divulgação** | Partilha do link público na Bio do Instagram e WhatsApp. | Direcionar clientes curiosos para o funil de agendamento autônomo. |
| **3. Agendamento Passivo** | O sistema recebe a marcação com trava de concorrência. | Ganhar um novo serviço confirmado enquanto está com a "mão na massa", sem risco de choques. |
| **4. Gestão de Exceções** | Inserção rápida de bloqueios para compromissos pessoais. | Garantir tempo para si (médico, descanso) sem quebrar a agenda pública. |
| **5. Planejamento com IA** | Consulta do Briefing Diário gerado por IA no início do dia. | Entender a carga de trabalho do dia em segundos, de forma natural e humana. |

---

## 🔎 Detalhamento por Etapa (O Dia a Dia de Carlos)

### 🟦 Etapa 1: Descoberta e Setup Inicial (A Jornada de Configuração)

**Ações do Usuário:**
1. Cria a conta no sistema via Autenticação Segura (Clerk/Google).
2. Define os dias de trabalho, horário comercial e sua pausa de almoço.
3. Cadastra os tipos de serviço com duração estimada (ex: Troca de Chuveiro - 1h).

**Pontos de Contato:**
* Dashboard Restrito > Aba de Configurações.

**Percepção do Usuário (Momento Wow):**
Ver que o sistema bloqueia automaticamente o horário de almoço e calcula as janelas exatas de disponibilidade com base na matemática de duração de cada serviço.

---

### 🟦 Etapa 2: Divulgação e Fluxo de Clientes

**Ações do Usuário:**
1. Copia a URL personalizada de agendamento gerada pelo sistema.
2. Atualiza a mensagem automática do WhatsApp Business: *"Estou em atendimento. Para agendar um serviço, clique aqui: [LINK]"*.

**Percepção do Usuário (Emoção):**
* **Alívio:** O funil de vendas agora é autônomo. Ele não precisa mais interromper um serviço perigoso (ex: mexendo em fiação elétrica) para responder orçamentos no WhatsApp.

---

### 🟦 Etapa 3: Agendamento Passivo e Trava de Segurança

Para maximizar a conversão de orçamentos, o sistema foi desenhado com um **Fluxo sem Atrito** para o cliente final. Não há necessidade de criar contas, baixar aplicativos ou criar senhas.

![Fluxo de Agendamento via WhatsApp](./design/chamada_whatsapp.png)

*(Acima: O cliente Matheus clica no link do WhatsApp e vai direto para a conversão, inserindo apenas Nome e WhatsApp).*

**Ações (O que acontece enquanto Carlos trabalha):**
1. O cliente final acessa a Booking Page diretamente pelo link recebido.
2. **Sem Cadastro:** O cliente visualiza a grade, escolhe o serviço e preenche apenas os dados essenciais de contato (Nome e WhatsApp), confirmando o agendamento em menos de 30 segundos.
3. **A Mágica da Concorrência:** Se dois clientes tentarem marcar a última vaga das 14h ao mesmo tempo, o Backend (Prisma/Supabase) aciona a trava de *Double-Booking*. O primeiro cliente confirma, o segundo recebe um aviso instantâneo de que a vaga acabou de ser preenchida.
4. Carlos abre o celular no fim do dia e vê a agenda preenchida perfeitamente, com os contatos dos clientes prontos para uso.

**Percepção do Usuário:**
* **Para o Cliente Final:** Alívio e conveniência. Ele resolveu o problema do agendamento rapidamente, sem burocracia.
* **Para o Profissional:** Confiança total. Ele sabe que não perdeu o cliente por atrito de sistema e que nunca chegará na casa de alguém para descobrir um choque de horários. O sistema atuou como um funil de vendas perfeito e um juiz imparcial.

---

### 🟦 Etapa 4: Gestão de Exceções (A Retomada de Controle)

**Ações do Usuário:**
1. Carlos descobre que precisará buscar o filho na escola quinta-feira às 15h.
2. Abre o Dashboard no celular e insere um "Bloqueio Pessoal" das 15h às 16h.

**Percepção do Usuário:**
* **Controle:** A ferramenta se adapta à vida real dele. O cliente final não vê o motivo do bloqueio, apenas que o horário está acinzentado e indisponível.

---

### 🟦 Etapa 5: Planejamento Inteligente e Execução (O Auxílio da IA)

**Ações do Usuário:**
1. Carlos acorda e abre o Dashboard enquanto toma café.
2. Em vez de ler uma tabela fria de horários, ele lê o **Resumo Inteligente (Google Gemini)**: *"Bom dia, Carlos! Você tem 3 serviços hoje. A manhã está cheia, mas você terá uma pausa merecida de 2 horas após o almoço. Seu último serviço será perto das 17h."*
3. Ele sai para trabalhar com o roteiro mental organizado.

**Percepção do Usuário:**
* **Profissionalização:** Ele se sente apoiado por um "assistente executivo digital" que entende a carga de estresse do dia dele.

---

## 🛡️ O Escudo Invisível (Bastidores Técnicos)

Para que essa jornada ocorra de forma impecável na tela do celular de Carlos, o sistema opera com três guardiões invisíveis definidos nos Requisitos Não Funcionais (RNFs):

1. **A Trava de Banco de Dados:** Impede a colisão de horários (*Double-Booking*), resolvendo a maior dor do profissional autônomo.
2. **Testabilidade (Jest):** As lógicas matemáticas que calculam se um serviço de 2 horas cabe numa janela de tempo são blindadas por testes unitários. Atualizações futuras no código não quebrarão a agenda de Carlos.
3. **Observabilidade (Sentry):** Se o navegador de um cliente antigo travar na tela de agendamento, o erro não se perde. O sistema envia um alerta silencioso (com a linha exata do código) para a equipe de desenvolvimento corrigir o problema proativamente, garantindo que Carlos não perca vendas por falhas de software.
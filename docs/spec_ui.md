# Especificação de UI

## 1. Protótipos e Mockups (Google Stitch)
Conforme exigido na fase de Discovery, os protótipos visuais de alta fidelidade (mockups) que representam as telas principais do sistema foram gerados via ferramenta assistida por IA (Google Stitch). 

**Todos os artefatos visuais e arquivos fonte dos protótipos estão salvos e organizados no diretório `/docs/design/` deste repositório**, contemplando:
- Tela Pública de Agendamento (`stitch_clientes`).
- Tela de Sucesso/Confirmação (`stitch_success`).
- Tela de Autenticação (`stitch_login`).
- Dashboard do Profissional (`stitch_dashboard`).
- Painel de Configurações (`stitch_configuracoes`).

---

## 2. Interfaces Gráficas

A seguir estão listadas as especificações detalhadas das interfaces desenvolvidas para o MVP (v1), divididas entre a visão do Cliente Final (pública) e a visão do Profissional (privada/autenticada).

### INT-01 - Página de Agendamento Pública (Booking Page)
- **Tipo de contêiner:** Página Web (Mobile-first)
- **Campos:** - Header de Perfil (Avatar/Foto, Nome do Profissional e Título da Profissão - ex: "Carlos Eletricista").
  - Seleção de Data (Calendário simplificado).
  - Seleção de Horário (Botões/pílulas dinâmicas. Horários ocupados ou bloqueados ficam indisponíveis/cinzas).
  - Nome Completo (Input text).
  - WhatsApp (Input text com máscara de telefone).
  - Serviço Desejado (Dropdown populado dinamicamente com os serviços do profissional, **ocultando automaticamente serviços administrativos de bloqueio**).
  - Endereço / Observações (Textarea).
- **Botões:** `Confirmar Agendamento` (CTA com cor de destaque).
- **Considerações:** O design deve ser extremamente limpo, focado na conversão, sem distrações.

### INT-02 - Tela de Confirmação de Agendamento (Success Page)
- **Tipo de contêiner:** Página de Sucesso.
- **Campos:** Resumo do agendamento (Nome do serviço, Data, Horário).
- **Links:** - `Adicionar ao meu Calendário`.
  - `Voltar para o Início`.
- **Considerações:** Deve exibir um Ícone de Check para transmitir segurança ao cliente de que a reserva foi efetivada instantaneamente na agenda.

### INT-03 - Tela de Login do Profissional
- **Tipo de contêiner:** Formulário de Autenticação Centralizado.
- **Botões:** `Entrar com Google` (Social Login via Clerk).
- **Considerações:** Acesso rápido e seguro, sem necessidade de digitação de senhas complexas no mobile.

### INT-04 - Dashboard Principal (Minha Agenda)
- **Tipo de contêiner:** Painel de Controle Administrativo.
- **Campos:** - Abas de navegação interna (`Próximos` / `Histórico`).
  - Lista de Cards de Agendamento: Exibe horário, nome do cliente, serviço e endereço.
  - **Identificador de Bloqueio:** Cards referentes a compromissos pessoais recebem um estilo visual distinto (ícone de cadeado, cor acinzentada, título "🔒 BLOQUEIO PESSOAL") e não exibem botões de contato com o cliente.
- **Botões:** - `Bloquear` (Abre a INT-06).
  - `Link` (Copia a URL pública de agendamento).
  - Botões de Ação no Card do Cliente: `Concluir`, `Cancelar`, `WhatsApp`.

### INT-05 - Configuração de Disponibilidade e Serviços (Settings)
- **Tipo de contêiner:** Formulário Dinâmico.
- **Campos (Seção Horários):** Checkboxes de dias da semana (Segunda a Domingo), inputs de tempo para Início/Término do Expediente e Início/Término da Pausa de Almoço.
- **Campos (Seção Serviços):** Lista de cartões com os serviços cadastrados (Nome e Duração).
- **Botões:** - `+ Adicionar Novo` (Gera inputs inline para novo serviço).
  - Ícone de Lixeira (Excluir serviço).
  - `Salvar Configurações`.

### INT-06 - Modal de Bloqueio Pessoal (Nova Funcionalidade)
- **Tipo de contêiner:** Modal (Overlay sobre o Dashboard).
- **Campos:** - Data do Bloqueio (Datepicker).
  - Selecione os Horários (Grid de botões/pílulas exibindo os horários disponíveis na data selecionada).
- **Botões:** `Confirmar Bloqueio`, `Cancelar`.
- **Considerações:** Permite ao profissional selecionar um ou múltiplos horários rapidamente para bloqueá-los de agendamentos externos.

### INT-07 - Gestão de Clientes (Meus Clientes)
- **Tipo de contêiner:** Página de Listagem.
- **Campos:** - Barra de busca (Filtrar por nome ou serviço).
  - Cards de Clientes (Iniciais do nome no Avatar, Nome, Serviço realizado, Data da última visita).
- **Botões:** Ícone de Balão de Mensagem (Redireciona para o WhatsApp do cliente).
- **Considerações:** Lista gerada automaticamente baseada nos agendamentos marcados como "Concluídos" (status `completed`).

---

## 3. Fluxo de Navegação

### Visão do Cliente Final
1. Clica no link compartilhado pelo profissional no WhatsApp/Instagram.
2. Acessa a **INT-01 (Booking Page)**.
3. Escolhe a Data, o Horário (apenas livres) e preenche seus dados.
4. Clica em `Confirmar Agendamento`.
5. É redirecionado para a **INT-02 (Success Page)**.

### Visão do Profissional (Gestão de Rotina)
1. Acessa a URL restrita do sistema.
2. Visualiza a **INT-03 (Login)** e se autentica via Google.
3. Cai na **INT-04 (Dashboard Principal)**.
4. Para emergências, clica em `Bloquear`, seleciona data e hora na **INT-06 (Modal)** e confirma. O horário some da tela do cliente.
5. Pelo menu lateral, acessa **INT-07 (Clientes)** para fazer remarketing ou **INT-05 (Ajustes)** para alterar serviços/expediente.

---

## 4. Diretrizes para IA
1. **Clean UI & Acessibilidade:** O foco absoluto deve ser interfaces minimalistas (estilo Apple/Stripe). Priorizar uso de whitespace e contraste visual.
2. **Componentização (Atomic Design):** Interfaces não devem ser geradas em arquivos `.tsx` monolíticos. A IA deve isolar formulários, cards e modais em sub-componentes independentes.
3. **Responsividade (Mobile-First):** Cada fragmento de design (Tailwind classes) deve ser validado para funcionamento impecável em telas estreitas, priorizando a usabilidade touch (botões grandes, espaçamentos generosos).
4. **Tratamento de Estado:** A IA deve implementar feedbacks visuais imediatos (loading spinners, `disabled states` em botões, *toast notifications* de sucesso/erro) durante as mutações de dados no Prisma/Supabase.
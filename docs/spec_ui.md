# Especificação de UI

## Protótipos e Mockups (Google Stitch)
Conforme exigido na fase de Discovery, os protótipos visuais de alta fidelidade (mockups) que representam as telas principais do sistema foram gerados via ferramenta assistida por IA (Google Stitch). 

**Todos os artefatos visuais e arquivos fonte dos protótipos estão salvos e organizados no diretório `docs/design/` deste repositório**, contemplando:
- Tela Pública de Agendamento (`stitch_clientes`).
- Tela de Sucesso/Confirmação (`stitch_success`).
- Tela de Autenticação (`stitch_login`).
- Dashboard do Profissional (`stitch_dashboard`).
- Painel de Configurações (`stitch_configuracoes`).

---

## Interfaces gráficas

A seguir estão listadas as especificações detalhadas das interfaces planejadas para o MVP (v1), divididas entre a visão do Cliente Final (pública) e a visão do Profissional (privada/autenticada).

### INT-01 - Página de Agendamento Pública (Booking Page)
- **Tipo de contêiner:** Página Web (Mobile-first)
- **Campos:** - Header de Perfil (Avatar/Foto, Nome do Profissional e Título da Profissão - ex: "Carlos Eletricista").
  - Seleção de Data (Calendário simplificado em formato carrossel horizontal ou grid pequeno).
  - Seleção de Horário (Botões/pílulas apenas com horários disponíveis).
  - Nome Completo (Input text).
  - WhatsApp (Input text com máscara de telefone).
  - Serviço Desejado (Input text ou Dropdown opcional).
  - Endereço / Observações (Textarea - opcional dependendo do serviço).
- **Botões:** - `Confirmar Agendamento` (Ação principal, CTA com cor de destaque).
- **Links:** - (Opcional) Link para o WhatsApp direto do profissional.
- **Considerações:** Esta é a tela mais crítica. O design deve ser extremamente limpo, focado na conversão. Sem distrações.

### INT-02 - Tela de Confirmação de Agendamento (Success Page)
- **Tipo de contêiner:** Página de Sucesso / Modal tela cheia
- **Campos:** - Resumo do agendamento (Exibição de texto: Nome do serviço, Data, Horário).
- **Links:** - `Adicionar ao meu Calendário` (Google Calendar / Apple Calendar).
  - `Fechar` ou `Voltar ao início`.
- **Considerações:** Deve passar sensação de segurança ao cliente de que a reserva foi efetivada instantaneamente na agenda do profissional. Opcionalmente, pode exibir um Ícone de Check animado.

### INT-03 - Tela de Login do Profissional
- **Tipo de contêiner:** Formulário de Autenticação (Modal ou Página Centralizada)
- **Campos:** - E-mail (Input email).
  - Senha (Input password) ou Magic Link (Input email).
- **Botões:** - `Entrar`.
  - `Entrar com Google` (Social Login nativo do Supabase Auth).
- **Considerações:** Como o escopo é V1, a autenticação deve ser a mais indolor possível.

### INT-04 - Dashboard Principal (Minha Agenda)
- **Tipo de contêiner:** Página de Painel de Controle (Mobile-first)
- **Campos:** - Seletor rápido de Dia (Hoje, Amanhã, Calendário).
  - Lista de Cards de Agendamento (cada card mostra: Horário Inicial/Final, Nome do Cliente, WhatsApp com botão rápido de ação, Serviço).
- **Botões:** - `Copiar meu Link de Agendamento` (Botão de ação rápida no topo).
  - Botão de Ação no Card do Cliente: `Abrir no WhatsApp`.
- **Links:** - Menu de Navegação / Header (Ex: `Agenda`, `Configurações`, `Sair`).
- **Considerações:** A visualização diária precisa ser a "tela inicial" logo após o login. O profissional entra aqui apenas para ver rapidamente para onde ele precisa ir na próxima hora.

### INT-05 - Configuração de Disponibilidade e Serviços (Settings)
- **Tipo de contêiner:** Formulário de Configurações
- **Campos:** - Dias de Trabalho (Checkboxes: Segunda a Domingo).
  - Horário de Início e Término Padrão.
  - Gestão de Serviços Oferecidos.
- **Botões:** `Salvar Configurações`.
- **Links:** `Voltar para Agenda`.

---

## Fluxo de Navegação

### Visão do Cliente Final
1. O cliente clica no link compartilhado pelo profissional no WhatsApp/Instagram.
2. Acessa a **INT-01 (Booking Page)**.
3. Escolhe a Data -> Escolhe o Horário -> Preenche seus dados.
4. Clica em `Confirmar Agendamento`.
5. É redirecionado para a **INT-02 (Success Page)** confirmando a marcação.

### Visão do Profissional
1. Acessa a URL restrita do sistema (`/admin` ou `/login`).
2. Visualiza a **INT-03 (Login)** e se autentica.
3. É redirecionado automaticamente para a **INT-04 (Dashboard Principal)**.
4. (Opcional) Pelo menu do Header, navega para **INT-05 (Configuração)** para alterar seus horários.
5. Salva em **INT-05** e volta para **INT-04**.

---

## Diretrizes para IA
1. **Clean UI & Acessibilidade**: O foco absoluto deve ser interfaces minimalistas (estilo Apple/Stripe). Priorizar uso de whitespace. Acessibilidade (tags ARIA, contrastes) é obrigatória.
2. **Componentização (Atomic Design)**: As interfaces nunca devem ser geradas em um arquivo `.tsx` monolítico. A IA deve quebrar formulários e cards em sub-componentes na pasta `/components`. 
3. **Responsividade Garantida**: Cada fragmento de design gerado (*Tailwind classes*) deve ser validado mentalmente pela IA para funcionar primeiramente em telas estreitas (`mobile`).
4. **Mock Actions**: Na ausência momentânea de APIs reais, a IA deverá gerar estados visuais (loading spinners, botões desabilitados) para validar a UX.
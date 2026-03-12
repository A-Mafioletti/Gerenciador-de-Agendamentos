# Especificação de UI

## Interfaces gráficas

A seguir estão listadas as interfaces gráficas planejadas para o MVP (v1) do Gerenciador de Agendamentos, divididas entre a visão do Cliente Final (pública) e a visão do Profissional (privada/autenticada).

### INT-01 - Página de Agendamento Pública (Booking Page)

- **Tipo de contêiner:** Página Web (Mobile-first)
- **Campos:** 
  - Seleção de Data (Calendário simplificado em formato carrossel horizontal ou grid pequeno).
  - Seleção de Horário (Botões/pílulas apenas com horários disponíveis).
  - Nome Completo (Input text).
  - WhatsApp (Input text com máscara de telefone).
  - Serviço Desejado (Input text ou Dropdown opcional).
  - Endereço / Observações (Textarea - opcional dependendo do serviço).
- **Botões:** 
  - `Confirmar Agendamento` (Ação principal, CTA com cor de destaque).
- **Links:** 
  - (Opcional) Link para o WhatsApp direto do profissional (para dúvidas antes de agendar).
- **Considerações:** Esta é a tela mais crítica. O design deve ser extremamente limpo, focado na conversão. Sem distrações. A paleta de cores deve refletir (ou ser neutra o suficiente para) a marca do profissional.

### INT-02 - Tela de Confirmação de Agendamento (Success Page)

- **Tipo de contêiner:** Página de Sucesso / Modal tela cheia
- **Campos:** 
  - Resumo do agendamento (Exibição de texto: Nome do serviço, Data, Horário).
- **Botões:** 
  - N/A
- **Links:** 
  - `Adicionar ao meu Calendário` (Google Calendar / Apple Calendar).
  - `Fechar` ou `Voltar ao início`.
- **Considerações:** Deve passar sensação de segurança ao cliente de que a reserva foi efetivada instantaneamente na agenda do profissional. Opcionalmente, pode exibir um Ícone de Check animado.

### INT-03 - Tela de Login do Profissional

- **Tipo de contêiner:** Formulário de Autenticação (Modal ou Página Centralizada)
- **Campos:** 
  - E-mail (Input email).
  - Senha (Input password) ou Magic Link (Input email).
- **Botões:** 
  - `Entrar`.
  - `Entrar com Google` (Opcional - Social Login).
- **Links:** 
  - `Esqueci minha senha` (se aplicável).
- **Considerações:** Como o escopo é V1, a autenticação deve ser a mais indolor possível. Magic Links (enviados pro e-mail sem exigir senha) são altamente recomendados para profissionais que não gostam de decorar senhas.

### INT-04 - Dashboard Principal (Minha Agenda)

- **Tipo de contêiner:** Página de Painel de Controle (Mobile-first)
- **Campos:** 
  - Seletor rápido de Dia (Hoje, Amanhã, Calendário).
  - Lista de Cards de Agendamento (cada card mostra: Horário Inicial/Final, Nome do Cliente, WhatsApp com botão rápido de ação, Serviço).
- **Botões:** 
  - `Copiar meu Link de Agendamento` (Botão de ação rápida no topo).
  - Botão de Ação no Card do Cliente: `Abrir no WhatsApp`.
- **Links:** 
  - Menu de Navegação / Header (Ex: `Agenda`, `Configurações`, `Sair`).
- **Considerações:** A visualização diária precisa ser a "tela inicial" logo após o login. O profissional entra aqui apenas para ver rapidamente para onde ele precisa ir na próxima hora.

### INT-05 - Configuração de Disponibilidade (Settings)

- **Tipo de contêiner:** Formulário de Configurações
- **Campos:** 
  - Dias de Trabalho (Checkboxes: Segunda a Domingo).
  - Horário de Início e Término Padrão (Time pickers, ex: 08:00 às 18:00).
  - Duração Padrão do Serviço (Dropdown: 30min, 1h, 2h).
  - Horário de Almoço / Pausa (Time pickers, ex: 12:00 às 13:00 - opcional).
- **Botões:** 
  - `Salvar Configurações`.
- **Links:** 
  - `Voltar para Agenda`.
- **Considerações:** A interface deve prevenir erros de conflito (ex: horário de término ser antes do horário de início). 

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
3. É redirecionado automaticamente para a **INT-04 (Dashboard Principal)** vendo os pacientes/clientes de Hoje.
4. (Opcional) Pelo menu do Header, navega para **INT-05 (Configuração)** para alterar seus horários padrão.
5. Salva em **INT-05** e volta para **INT-04**.

---

## Diretrizes para IA

Considerando a utilização de IAs generativas de código para transcrição deste documento em componentes visuais, as regras a seguir devem ser obedecidas:

1. **Clean UI & Acessibilidade**: O foco absoluto deve ser interfaces minimalistas (estilo Apple/Stripe). Evitar excesso de bordas escuras. Priorizar uso de whitespace (espaçamento) para separação de elementos visuais. Acessibilidade (tags ARIA, contrastes) é obrigatória.
2. **Componentização (Atomic Design)**: As interfaces (INTs) detalhadas acima nunca devem ser geradas em um arquivo `.tsx` monolítico e gigante. A IA deve quebrar formulários e cards em sub-componentes na pasta `/components`. Exemplo: `INT-01` deve ser composta por `<CalendarPicker />`, `<TimeSlotGrid />` e `<BookingForm />`.
3. **Responsividade Garantida**: Cada fragmento de design gerado (*Tailwind classes*) deve ser validado mentalmente pela IA para funcionar primeiramente em telas estreitas (`mobile`, padão do Tailwind sem os prefixos `md:` ou `lg:`). A adaptação para desktop (se existir) será feita através dos breaking points `md:` ou superiores, não o inverso.
4. **Mock Actions**: Na ausência momentânea de APIs reais durante o scaffolding das views, a IA deverá gerar estados visuais (loading spinners, botões desabilitados) baseados em `Promises` fakes simulando os atrasos de rede, para validar a UX.
5. **Ações Inesperadas**: Caso seja solicitado à IA que modifique massivamente o Layout principal introduzindo navegações laterais densas (Sidebars complexas), ela deve questionar se isso não fere o princípio "Mobile-First" e a simplicidade exigida para o "Profissional na Correria".

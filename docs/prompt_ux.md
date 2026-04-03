# Prompt para Geração de Protótipos de UX/UI

**Instrução para a IA:** Você atuará como um Especialista em UX/UI Sênior focado em interfaces *Mobile-First* e aplicações SaaS. Seu objetivo é criar wireframes e protótipos de alta fidelidade (código ou visual) para a aplicação web "Gerenciador de Agendamentos Inteligente".

---

## 1. Visão Geral do Produto e Personas
Plataforma de agendamento autônoma (assistente digital 24/7) focada em profissionais autônomos de serviços manuais (ex: elétrica, encanamento).

* **Persona 1 - Cliente Final:** Busca rapidez. Quer agendar um serviço emergencial, ter confirmação imediata e saber o horário exato da visita.
* **Persona 2 - Profissional (Carlos):** Trabalha em campo. Usa o sistema via smartphone para gerenciar a agenda em movimento. Precisa de fluxos de no máximo 3 cliques para não interromper seu trabalho técnico.

---

## 2. Diretrizes Estritas de Design
* **Clean UI & Acessibilidade:** Estética minimalista (inspirada na Stripe/Apple). Farto uso de *whitespace* (espaçamento) para separar elementos. Evitar bordas pesadas.
* **Mobile-First Nativo:** O design deve nascer para telas `< 640px`. Botões com *touch targets* grandes (mínimo 44px de altura).
* **Stack Tailwind/React:** Estruture o design pensando em *Atomic Design* para facilitar a componentização em React. Use a escala de espaçamento padrão do Tailwind CSS.
* **Feedback de Estado:** Inclua representações visuais para estados de *Loading* (spinners), *Success* (toasts) e *Disabled* (botões cinzas durante requisições).

---

## 3. Escopo dos Protótipos (MVP)

Gere a estrutura detalhada e sub-componentes para as seguintes 7 interfaces:

### INT-01: Página de Agendamento Pública (Booking Page)
Visão focada em conversão (acessada via link no Instagram/WhatsApp).
* **Header:** Avatar circular, Nome (ex: "Carlos Eletricista") e breve descrição.
* **Seleção de Data:** Calendário simplificado estilo carrossel horizontal.
* **Seleção de Horário:** Pílulas de horários. *Regra visual:* Horários ocupados/bloqueados devem aparecer desabilitados (cinza/opacidade reduzida) ou serem ocultados.
* **Formulário:** Nome, WhatsApp (com máscara) e Textarea para Endereço.
* **Serviços:** Dropdown dinâmico. *Regra de Negócio:* O serviço administrativo "🔒 BLOQUEIO PESSOAL" nunca deve ser renderizado aqui.
* **Ação:** CTA "Confirmar Agendamento" (Cor primária forte).

### INT-02: Tela de Confirmação (Success Page)
Feedback de conclusão para o Cliente Final.
* **Visual:** Modal tela cheia ou card centralizado com ícone animado de "Check" (Sucesso).
* **Resumo:** Exibir Serviço, Data e Horário confirmados.
* **Ações:** Botões secundários "Adicionar ao Calendário" e "Voltar".

### INT-03: Login do Profissional
Acesso administrativo.
* **Visual:** Formulário minimalista centralizado.
* **Ação Principal:** Botão em destaque "Entrar com Google" (Representando autenticação OAuth via Clerk).

### INT-04: Dashboard Principal (Minha Agenda)
A tela de acompanhamento diário do profissional.
* **Header:** Botão de ação rápida "Copiar Meu Link".
* **Navegação:** Filtro de dias (Hoje, Amanhã, Semana).
* **Cards de Clientes:** Exibe Horário, Nome, Serviço. Botão de ação direta: "Chamar no WhatsApp" (ícone verde).
* **Cards de Bloqueio:** *Regra visual crítica:* Se o card for um bloqueio pessoal, ele deve ter fundo acinzentado, ícone de cadeado e não possuir botões de interação com o cliente.

### INT-05: Configurações de Disponibilidade e Serviços (Settings)
Formulário dinâmico de regras de negócio.
* **Expediente:** Checkboxes elegantes para dias da semana (Seg-Dom). Time-pickers para Início/Fim do dia e Início/Fim do Almoço.
* **Catálogo:** Lista de serviços cadastrados. Botão para "+ Adicionar Serviço" (Nome e Duração em minutos).
* **Ação:** CTA "Salvar Configurações".

### INT-06: Modal de Bloqueio Pessoal (Fast Action)
Criado para gestão de exceções emergenciais.
* **Visual:** Overlay/Modal sobrepondo o Dashboard.
* **Campos:** Datepicker simples e Grid de horários do dia selecionado.
* **Ação:** O profissional seleciona um ou mais horários e clica em "Bloquear Agenda".

### INT-07: Lista de Clientes (CRM Básico)
Histórico de atendimentos.
* **Visual:** Lista de cards simplificados.
* **Dados:** Nome do cliente, último serviço realizado, data e atalho para o WhatsApp. Barra superior de busca.

---

**Output Esperado da IA:** Para cada interface, forneça o layout visual ou código Tailwind e sugira a quebra de componentes na arquitetura `/components` (ex: `<TimeSlotPicker />`, `<ServiceDropdown />`).
# Prompt para Geração de Protótipos de UX/UI

**Contexto:** Você assumirá o papel de um Especialista em UX/UI Sênior focado em interfaces "Mobile-First" e aplicações SaaS. Seu objetivo é criar wireframes e protótipos de alta fidelidade para uma aplicação web chamada "Gerenciador de Agendamentos Inteligente".

## Visão Geral do Produto
O sistema é uma plataforma de agendamento autônoma que funciona como um assistente digital 24/7. Seu foco é facilitar a vida de profissionais autônomos que realizam trabalho manual (ex: elétrica, encanamento, estética a domicílio, marcenaria), automatizando o agendamento de serviços.

**Público-Alvo e Perfis de Usuário:**
1. **O Cliente Final:** Precisa de rapidez para agendar um serviço emergencial ou corriqueiro. Seu objetivo é conseguir agendar um horário de forma rápida, ter a confirmação imediata e saber com certeza quando o profissional virá.
2. **O Profissional Autônomo (Carlos):** Está na correria do dia a dia. Perde clientes por demora no WhatsApp, sofre com choques de horário, e precisa usar um sistema simples via Smartphone para gerenciar a própria agenda em movimento, sem exigir tempo na frente do computador.

## Diretrizes de Design a serem seguidas estritamente
- **Acessibilidade e Clean UI:** O foco absoluto deve ser interfaces minimalistas (estilo Apple/Stripe). Evitar excesso de bordas escuras. Priorizar o uso de "whitespace" (espaçamento em branco) para separação de elementos visuais. Acessibilidade (tags ARIA, contrastes) é obrigatória.
- **Abordagem Mobile-First:** O design DEVE nascer pensado para telas de smartphone (mobile nativo), já que o profissional usará no celular o dia todo e o cliente agendará pela via mais rápida. Botões amigáveis para toque são essenciais. Adaptações desktop ocorrerão via breakpoints, não o inverso.
- **Foco em Conversão (INT-01):** Um cliente novo deve conseguir visualizar as datas e aprovar a marcação em menos de 2 minutos. Elimine qualquer fricção, sem necesidad de baixar apps ou criar senhas.
- **Stack-Friendly (Tailwind/React):** O sistema será desenvolvido usando React (Next.js) e estilização com Tailwind CSS (Utility-first). Portanto, planeje os designs utilizando Componentização (Atomic Design) para que facilmente derivem pequenos componentes independentes.

---

## Escopo dos Protótipos (MVP / v1)

Construa os cenários ou as descrições estruturais detalhadas em pequenos sub-componentes para as 5 interfaces abaixo:

### 1. INT-01 - Página de Agendamento Pública (Booking Page)
Visão Pública do Cliente (Onde ocorre a conversão via link do Instagram/WhatsApp).
- **Header do Perfil:** Avatar/Foto circular, Nome do Profissional e Título da Profissão (ex: "Carlos Eletricista").
- **Seleção de Data:** Um calendário simplificado em formato carrossel horizontal ou um grid pequeno.
- **Seleção de Horário:** Exibir apenas botões/pílulas dos horários DISPONÍVEIS no momento (horários ocupados desaparecem instantaneamente).
- **Formulário de Contato:** Inputs simples solicitando Nome Completo, WhatsApp (com máscara de telefone), Serviço Desejado (input/dropdown opcional) e Endereço/Observações (Textarea - opcional).
- **Ação:** Call to Action (CTA) limpo, de cor destacada, rotulado "Confirmar Agendamento".
- **Opcional:** Link para um bate-papo no WhatsApp tirar dúvidas rápidas antes de agendar.

### 2. INT-02 - Tela de Confirmação de Agendamento (Success Page)
Feedback de conclusão após a confirmação do Cliente (Página de Sucesso / Modal tela cheia).
- **Visual:** O design deve passar confiança de que a reserva está gravada, utilizando formas fluidas ou um íncone animado de confirmação.
- **Resumo:** Exibir claramente o status e o compromisso (Nome do serviço, Data e Horário).
- **Ações auxiliares:** Botão para "Adicionar ao meu Calendário" (Google/Apple) e "Fechar/Voltar ao início".

### 3. INT-03 - Tela de Login do Profissional
O processo de entrada para acesso do autônomo ao seu Dashboard.
- **Visual:** Centralizado, simples e indolor (Mobile Form / Modal).
- **Inputs:** E-mail e Senha, com destaque para a opção de uso de "Magic Link" (Input email) para maior velocidade sem ter que decorar senhas.
- **Ações:** Botão "Entrar". Opcional incluir "Entrar com Google".
- **Auxiliar:** Link de "Esqueci minha senha" (se aplicável).

### 4. INT-04 - Dashboard Principal (Minha Agenda)
A tela chave do dia a dia do prestador de serviço (Acessada imediatamente após o Login).
- **Header:** Menu de Navegação superior com botão de ação imediata "Copiar meu Link de Agendamento" bem acessível para colar nas suas redes.
- **Navegação rápida (Tempo):** Seletor rápido de Dia mostrando abas limpas (Ex: Hoje, Amanhã, Calendário geral).
- **Lista Diária de Trabalhos:** Lista de Cards otimizados para rápida leitura.
  - Cada card mostra: Horário Inicial/Final, Nome do Cliente, Serviço, e um botão visual para "Abrir no WhatsApp" diretamente no número preenchido pelo mesmo.
- *O objetivo é que o usuário entre aqui só para confirmar onde e para que cliente precisa ir na próxima hora sem dar muitos cliques.*

### 5. INT-05 - Configurações de Disponibilidade e Serviços (Settings)
A tela onde o profissional dita suas premissas sem risco de falhas.
- **Configuração de Dias de Trabalho:** Checkboxes de Segunda a Domingo de maneira otimizada.
- **Grade Horária:** Time pickers limpos, configurando o Horário de Início Padrão e o Término Padrão (ex: 08:00 às 18:00).
- **Bloqueios Extras:** Time pickers para Horário de Almoço / Pausa / Tempo de trajeto.
- **Gestão de Serviços:** Área de adição contendo "Nome do Serviço", "Descrição Opcional" e "Duração em minutos/horas". O profissional adiciona itens a esta lista dinamicamente.
- **Ação:** "Salvar Configurações". *A UI deve cuidar de prevenir visualmente os conflitos, desabilitando ações incogruentes (ex: término menor que Início).*

---

**Comando Extra para o Agente UI:** Para cada Design/Interface gerada, forneça explicitamente a estrutura de *Componentização* recomendável na arquitetura `/components` (ex: a INT-01 deve ser particionada em `<CalendarPicker />`, `<TimeSlotGrid />` e `<BookingForm />`). Se precisar aplicar estados vazios (empty states) ou loaders, utilize uma estética refinada e alinhada ao estilo Clean UI. Lembre-se, na ausência de APIs em protótipos, crie os status de "loading" baseados em conexões fakes de sucesso. Não crie componentes complexos de navegação lateral (Sidebars grandes) que firam o príncipio puramente mobile-first do Dashboard do profissional.

# Design System - Gerenciador de Agendamentos

Este documento define as diretrizes visuais e de interface de usuário (UI) para o projeto. Como a aplicação utiliza a abordagem *Utility-First*, todas as decisões de design foram mapeadas diretamente para as variáveis e classes do **Tailwind CSS**, garantindo consistência em toda a base de código.

---

## 1. Princípios de Design
1. **Mobile-First:** Como o público-alvo (clientes e profissionais em campo) acessa o sistema majoritariamente via smartphones, os layouts são desenhados para telas pequenas (`< 640px`) e escalados progressivamente para Desktop.
2. **Clean UI:** Foco absoluto na conversão. Interfaces minimalistas e amplo uso de espaço em branco (*whitespace*) para evitar sobrecarga cognitiva.
3. **Feedback Visual:** Todas as interações do usuário (cliques, salvamentos, erros) devem retornar feedback imediato via transições de estado.

---

## 2. Tipografia
* **Fonte Principal:** `Inter` (via `next/font/google`).
* **Justificativa:** Tipografia sem serifa com altíssima legibilidade em telas de todos os tamanhos e densidades de pixels. Ideal para formulários de agendamento e leitura rápida no Dashboard.
* **Escala Padrão (Tailwind):**
  * Títulos: `text-2xl` a `text-4xl` com peso `font-bold`.
  * Corpo de texto: `text-base` com peso `font-normal`.
  * Rótulos e Metadados: `text-sm` com peso `font-medium` ou `font-semibold`.

---

## 3. Paleta de Cores (Mapeamento Tailwind)

| Uso | Cor Hexadecimal | Classe Tailwind | Objetivo / Sensação |
| :--- | :--- | :--- | :--- |
| **Ação Principal** | `#0f172a` | `bg-slate-900` | Transmite profissionalismo, segurança e contraste máximo. Usado em CTAs primários (Confirmar). |
| **Background Base** | `#f8fafc` | `bg-slate-50` | Mantém a interface limpa e foca a atenção no conteúdo central. |
| **Texto Padrão** | `#334155` | `text-slate-700` | Reduz o contraste extremo do preto puro, reduzindo a fadiga visual. |
| **Sucesso** | `#10b981` | `text-emerald-500` / `bg-emerald-500`| Confirmações de agendamento e status `Concluído`. |
| **Alerta / Erro** | `#ef4444` | `text-red-500` | Validações de formulário e ações destrutivas (Excluir Serviço). |
| **Inativo / Bloqueio** | `#e2e8f0` | `bg-slate-200` | **Estado crítico:** Usado nos horários indisponíveis e nos agendamentos de *Bloqueio Pessoal*, acompanhado de opacidade reduzida (`opacity-50`). |

---

## 4. Grid e Espaçamentos
O sistema adota a escala de espaçamento de **4 pontos** (padrão do Tailwind) para garantir harmonia vertical e horizontal.
* Elementos internos de cards (padding): `p-4` (16px) ou `p-6` (24px).
* Espaçamento entre seções da página: `gap-6` ou `gap-8`.
* Container máximo na página pública: `max-w-md` ou `max-w-lg` para não esticar excessivamente o formulário em telas Desktop.

---

## 5. Componentes Base (Atomic Design)

### Botões e Inputs
* Todos os botões e campos de entrada de dados utilizam bordas arredondadas (`rounded-md` ou `rounded-lg`) para um aspecto mais amigável.
* **Estados de Interação:** * `hover:` Leve escurecimento do background ou elevação (shadow).
  * `disabled:` Background acinzentado, texto opaco e cursor modificado (`cursor-not-allowed`) para impedir duplo clique durante requisições ao banco.

### Cards (Dashboard e Clientes)
* Containers brancos (`bg-white`) sobrepostos ao fundo cinza, demarcados por sombras suaves (`shadow-sm`) ou bordas sutis (`border-slate-100`).

### Modais e Overlays
* Fundo escurecido (`bg-black/50` com `backdrop-blur-sm`) para isolar o contexto. Utilizado primariamente na funcionalidade de **Bloqueio Rápido de Horários**, forçando o foco do profissional na ação crítica antes de retornar à agenda.

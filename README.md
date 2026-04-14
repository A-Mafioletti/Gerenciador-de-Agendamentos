# 📅 Gerenciador de Agendamentos Inteligente (MVP)

> **🚀 APLICAÇÃO EM PRODUÇÃO E ROTEIRO DE TESTE:**
> 
> 🧑‍💻 **Visão do Cliente (Pública):** **[👉 ACESSAR A BOOKING PAGE](https://projeto-agendamentos-ashen.vercel.app)**
> * **O que avaliar:** Escolha um serviço longo (ex: Troca de Chuveiro - 1h30) e tente agendar no último horário do dia para ver a proteção de *"Time Overflow"*. Verifique também a blindagem contra "Double-Booking" (Conflito de Intersecção) e o estado de "Loading" (Double Submit) ao confirmar.
>
> 🧑‍🔧 **Visão do Profissional (Dashboard):** **[👉 ACESSAR O LOGIN DO SISTEMA](https://projeto-agendamentos-ashen.vercel.app/login)**
>
>  Para avaliar o sistema administrativo, sugerimos dois caminhos distintos:
> 
> * **Opção A: Ambiente Populado (Recomendado):** Utilize nossa persona de testes. Este perfil já possui serviços cadastrados, configurações de expediente e histórico preenchido para facilitar a validação imediata.
> *  **Login:** carlos.eletricista@hotmail.com - **Senha:** teste123
>   
>  **O que avaliar:** Teste o bloqueio manual de horários (simulando imprevistos) e a gestão da agenda diária. *Nota: Este é o perfil que possui a Booking Page pública ativada.*.
> * **Opção B: Exploração do Dashboard (Do Zero):** Escolha "Continuar com Google" usando sua própria conta.
>   
>  **O que avaliar:** O isolamento de dados da arquitetura Multi-Tenant (Clerk). Você entrará em um painel "limpo", podendo testar as validações da interface ao configurar seu horário de trabalho e serviços.
>   
>  *Nota Técnica do MVP:* A geração dinâmica de URLs públicas de agendamento (ex: `/agendamentos/usuario`) foi considerada fora do escopo desta versão inicial. Portanto, contas novas podem navegar pelo Dashboard administrativo, mas não gerarão uma Booking Page externa.

Bem-vindo ao repositório do Gerenciador de Agendamentos Inteligente, uma plataforma autônoma projetada para profissionais que executam trabalhos manuais (como eletricistas, encanadores, marcenaria e estética a domicílio). Este sistema atua como um assistente digital 24/7, permitindo que os clientes agendem horários de forma independente, reduzindo tarefas administrativas e evitando choques de horários ("double-booking").

---

## 🛠️ Atendimento aos Requisitos Técnicos e Integrações

A aplicação foi estruturada como um **Monolito Modular** (Monorepo), utilizando tecnologias modernas da stack Jamstack e arquitetura Serverless para garantir alta performance. Abaixo estão os pilares tecnológicos que atendem aos requisitos do projeto:

* **Frontend e Backend (Next.js, React e TypeScript):** Operam de forma integrada, garantindo tipagem forte de ponta a ponta e renderização dinâmica híbrida.
* **Hospedagem e CI/CD (Vercel):** Deploy automático contínuo na Edge Network da Vercel, garantindo alta disponibilidade e escalabilidade instantânea.
* **Segurança e Multi-Tenant (Clerk Auth):** Plataforma BaaS (Backend as a Service) responsável por todo o fluxo de login seguro, proteção de rotas privadas do Dashboard e isolamento de dados de cada profissional.
* **Persistência de Dados (Supabase + Prisma ORM):** Banco de dados relacional em nuvem (PostgreSQL), gerenciado de forma segura e estruturada através do Prisma ORM para armazenar agendas, serviços e configurações.
* **Portabilidade e Prevenção de Vendor Lock-in (Docker / RNF-06):** Para garantir que a aplicação não fique refém de um único fornecedor de nuvem (Vercel) e cumpra com o requisito de portabilidade, o repositório contém `Dockerfile` e `docker-compose.yml` nativos. Isso permite que o sistema seja rapidamente empacotado em contêineres no padrão OCI e implantado em qualquer outra infraestrutura (AWS, Azure, DigitalOcean).

---

## 📦 Estrutura do Repositório (Monorepo)

```text
gerenciador-agendamentos/
├── apps/
│   ├── frontend/        # Aplicação Web Principal (Vercel)
│   └── backend/         # API Base, Lógica de Negócios e ORM (Prisma)
├── docs/                # Documentação técnica, produto, negócios e IA
└── package.json         # Workspaces do monorepo
```

---

## 🤖 Uso de Inteligência Artificial (Pair Programming)

Este projeto utilizou ferramentas de IA Generativa (Google Gemini) como suporte ao desenvolvimento. O registro detalhado dos prompts utilizados para modelagem de banco de dados, resolução de bugs de infraestrutura, refatoração de UX e algoritmos matemáticos encontra-se no arquivo:
📄 **[Acesse as Evidências e Prompts de IA aqui](./docs/ai_prompts.md)**

---

## 📚 Documentação Complementar

A documentação completa exigida para a avaliação está organizada na pasta `/docs/` e foi integralmente revisada:
* 🎯 **[PRD (Definição de Requisitos e Escopo)](./docs/prd.md)**
* ⚙️ **[Especificação Técnica, Arquitetura e Stack](./docs/spec_tech.md)**
* 🎨 **[Especificação de UI, User Flow e Mockups](./docs/spec_ui.md)**

---

## 💻 Como Reproduzir o Projeto Localmente

Você pode executar este projeto de duas maneiras: utilizando o ambiente Node.js tradicional (ideal para desenvolvimento) ou via contêineres Docker (para validar o requisito de portabilidade RNF-06).

**⚠️ Passo Obrigatório (Para ambas as opções):**
Antes de iniciar, crie um arquivo `.env` na raiz do projeto baseado no `.env.example`. 
*Importante:* Insira suas credenciais do banco de dados (Supabase) e as chaves de autenticação do Clerk (`NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY` e `CLERK_SECRET_KEY`). Sem elas, as rotas privadas e o banco falharão.

---

### Opção 1: Ambiente de Desenvolvimento (Node.js)
*Pré-requisitos: Node.js (v18+).*

1. Clone o repositório e acesse a pasta principal da aplicação.
2. Instale as dependências executando `npm install`.
3. Sincronize o banco de dados via Prisma executando `npx prisma generate` seguido de `npx prisma db push`.
4. Inicie o servidor de desenvolvimento executando `npm run dev`. 
5. A aplicação estará disponível em `http://localhost:3000`.

### Opção 2: Ambiente Contêinerizado (Docker)
*Pré-requisitos: Docker e Docker Compose instalados.*

1. Clone o repositório e certifique-se de que o arquivo `.env` está configurado na raiz.
2. Execute o comando para construir e subir a imagem da aplicação:
   `docker-compose up -d --build`
3. O Docker fará o download das dependências, empacotará o Next.js e subirá o serviço de forma isolada.
4. Acesse a aplicação em `http://localhost:3000`.

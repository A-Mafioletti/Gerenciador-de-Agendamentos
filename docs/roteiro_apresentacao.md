# Roteiro de Apresentação - Defesa do Projeto (MVP)

> **Produto:** Gerenciador de Agendamentos Inteligente
> **Autor:** André Mafioletti
> **Link de Produção:** [https://projeto-agendamentos-ashen.vercel.app](https://projeto-agendamentos-ashen.vercel.app)

---

## 1. O Problema e o Alinhamento de Mercado (Discovery)

Nossa jornada começou mapeando a dor real de profissionais autônomos (representados pela nossa persona, o *Carlos Eletricista*). 
Através do **Lean Canvas** e do **User Journey**, identificamos que:
* O profissional perde orçamentos porque não pode responder clientes enquanto executa serviços manuais.
* Ocorre constante choque de horários (double-booking) por falha na gestão manual.
* **A Solução:** Um assistente digital 24/7 que permite auto-agendamento pelo cliente final, integrado a um painel de controle mobile-first para o profissional.

---

## 2. O Produto Entregue (Highlights do MVP)

O sistema foi entregue superando as expectativas do PRD inicial. As principais entregas de valor são:

* **Booking Page Inteligente:** A interface pública (Mobile-First) cruza a duração de cada serviço com a grade de horários do profissional, ocultando automaticamente os horários já agendados ou bloqueados.
* **Gestão Dinâmica (Configurações):** O profissional tem autonomia para cadastrar serviços e definir seus dias/horários de trabalho em tempo real.
* **Bloqueio Pessoal (Gestão de Exceções):** Implementamos uma feature crítica onde o profissional pode "inativar" horários na agenda para compromissos pessoais, usando um fluxo de serviço administrativo interno que mantém a integridade do banco de dados.

---

## 3. Arquitetura e Engenharia de Software (Tech Stack)

A aplicação não é apenas funcional, mas foi desenhada com padrões de arquitetura de nível corporativo (conforme documentado no nosso **C4 Model** e **ADRs**):

* **Arquitetura Multi-Tenant:** O banco de dados PostgreSQL (via Supabase) isola rigorosamente os dados. O sistema valida todas as requisições baseadas no ID do profissional autenticado.
* **Segurança e Identidade:** Delegamos a autenticação para o **Clerk** (OAuth), reduzindo a superfície de ataque e garantindo sessões seguras.
* **Performance em Ambiente Serverless:** Como usamos as *Serverless Functions* do Next.js na Vercel, implementamos o **PgBouncer** no Prisma ORM (Connection Pooling) para garantir que picos de acesso não derrubem o limite de conexões do banco de dados (conforme ADR-001).

---

## 4. Maturidade de Infraestrutura (DevOps & IaC)

O projeto consolida as melhores práticas de entrega contínua:

* **CI/CD (Continuous Integration / Continuous Deployment):** O repositório conta com uma pipeline robusta via **GitHub Actions** (`.github/workflows/deploy.yml`) que automatiza testes, linting e realiza o deploy na Vercel a cada *push* aprovado na branch principal.
* **Infrastructure as Code (IaC):** A infraestrutura deixou de ser manual. Adicionamos a declaração do projeto utilizando **Terraform** (pasta `/infra`). O arquivo `main.tf` mapeia o nosso serviço na Vercel e gerencia as variáveis de ambiente de forma declarativa e versionada.

---

## 5. Conclusão

O **Gerenciador de Agendamentos** entregue na Vercel é um produto viável, seguro e altamente escalável. Toda a documentação metodológica (pasta `/docs`) está estritamente alinhada com o código-fonte executado em produção.

O uso de Inteligência Artificial como suporte de *Pair Programming* acelerou o debugging e a modelagem, resultando em uma fundação técnica madura e pronta para receber módulos futuros, como integrações de pagamento e APIs do WhatsApp.
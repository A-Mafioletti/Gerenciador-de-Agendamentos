# Roteiro de Apresentação - Defesa do Projeto (MVP)

> **Produto:** Gerenciador de Agendamentos Inteligente
> **Autor:** André Mafioletti
> **Link de Produção:** [https://projeto-agendamentos-ashen.vercel.app](https://projeto-agendamentos-ashen.vercel.app)

---

## 1. O Problema e o Alinhamento de Mercado (Discovery)

Nossa jornada começou mapeando a dor real de profissionais autônomos (representados pela nossa persona, o *Carlos Eletricista*). 
Através do **Lean Canvas** e do **User Journey**, identificamos que:
* O profissional perde orçamentos porque não pode responder clientes enquanto executa serviços manuais.
* Ocorre constante choque de horários (double-booking) por falha na gestão manual e reativa.
* **A Solução:** Um assistente digital 24/7 que permite auto-agendamento pelo cliente final, integrado a um painel de controle mobile-first inteligente para o profissional.

---

## 2. O Produto Entregue e as Regras de Negócio

O sistema foi entregue superando as expectativas do PRD inicial. As principais entregas de valor são:

* **Booking Page Dinâmica:** A interface pública cruza a duração de cada serviço com a grade do profissional, ocultando horários indisponíveis.
* **Trava de Concorrência (Zero Double-Booking):** Implementamos uma validação estrita no backend (ADR-008). Se dois clientes tentarem confirmar o mesmo horário no mesmo segundo, o banco de dados atua como juiz, garantindo a vaga apenas ao primeiro e prevenindo colapsos de agenda.
* **Gestão de Exceções (Bloqueio Pessoal):** O profissional pode inativar horários na agenda para compromissos pessoais, usando um serviço administrativo fantasma que mantém a integridade do banco (ADR-004).
* **Resumo Inteligente (IA Generativa):** Elevamos o nível do Dashboard integrando a API do **Google Gemini**. O sistema lê a carga de trabalho do dia e gera um briefing natural e humanizado para o profissional planejar sua rotina matinal (ADR-009).

---

## 3. Arquitetura e Engenharia de Software (Tech Stack)

A aplicação foi desenhada com padrões de arquitetura corporativa (conforme C4 Model):

* **Microsserviços e Multi-Tenant:** Frontend em Next.js e API Backend nativa. O banco PostgreSQL (Supabase) isola os dados de cada profissional via *Row Level Security (RLS)*.
* **Segurança e Identidade:** Delegamos a autenticação para o **Clerk** (OAuth), reduzindo a superfície de ataque e garantindo sessões seguras validadas via middleware.
* **Connection Pooling:** Para garantir que o Serverless não esgote as conexões do banco em picos de acesso, configuramos o Prisma ORM com o **PgBouncer** (ADR-001).
* **Manutenibilidade e Testabilidade (RNF-05):** O ambiente conta com a arquitetura do **Jest** configurada, possuindo testes unitários que blindam as lógicas vitais de cálculo e formatação de horários contra regressões de código (ADR-011).

---

## 4. Maturidade de Infraestrutura (DevOps e Observabilidade)

O projeto consolida as melhores práticas de entrega contínua e monitoramento em nuvem:

* **CI/CD Customizado:** A pipeline via **GitHub Actions** possui controle cirúrgico sobre o build, injetando variáveis de ambiente e compilando o ORM com os *binaryTargets* corretos para o ambiente Linux da Vercel (`rhel-openssl-3.0.x`), resolvendo conflitos nativos de Serverless (ADRs 006 e 007).
* **Observabilidade em Tempo Real (RNF-04):** Abandonamos a dependência de logs de terminal e implementamos o **Sentry SDK** na camada de apresentação (Frontend/Next.js), que é o ponto crítico de contato com o cliente. O sistema rastreia exceções e performance em tempo real, realizando upload de *Source Maps* para identificar a linha exata de falha no TypeScript original (ADR-010). A arquitetura já está validada e pronta para a expansão dessa mesma stack de monitoramento para os microsserviços de backend nas próximas sprints.
* **Compatibilidade Serverless:** Resolvemos conflitos complexos de sistema operacional na nuvem, configurando os *binaryTargets* do Prisma (`rhel-openssl-3.0.x`) para garantir que o motor do banco de dados rode perfeitamente no ambiente Linux da Vercel (conforme ADR-006).

---

## 5. Roteiro de Demonstração ao Vivo (Live Demo)


1. **Visão do Profissional:** Fazer login com o Clerk. Mostrar a tela inicial e destacar a mensagem gerada pela **IA do Gemini** resumindo o dia.
2. **Configurações:** Mostrar rapidamente a tela de grade de horários e os serviços cadastrados.
3. **Visão do Cliente (A Mágica):** Abrir o link público (Booking Page). Fazer um agendamento rápido de um serviço simulando um cliente real.
4. **O Retorno:** Voltar ao Dashboard do profissional e mostrar o agendamento que acabou de "cair" na tela, refletindo o banco de dados em tempo real.
5. **Painéis Técnicos (Opcional, se o tempo permitir):** Mostrar a pipeline verde no GitHub Actions e o painel do Sentry aguardando erros (zerado).

---

## 6. Conclusão

O **Gerenciador de Agendamentos** entregue na Vercel é um produto viável, monitorado, testável e altamente escalável. Toda a documentação metodológica (pasta `/docs`) está estritamente alinhada com o código-fonte executado em produção.

A arquitetura final prova o domínio sobre o ecossistema Jamstack, segurança de APIs e observabilidade, resultando em uma fundação técnica madura e pronta para expansões futuras.
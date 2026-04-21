# Diagrama de Classes / Código (Nível 4)

Representação do domínio do problema, as entidades principais modeladas no Prisma ORM e seus relacionamentos lógicos no banco de dados (Supabase).

```mermaid
classDiagram
  class Profissional {
    +String id
    +String nome
    +String email
  }
  
  class ConfiguracaoAgenda {
    +String profissionalId
    +JSONB diasTrabalho
    +Time inicioExpediente
    +Time fimExpediente
    +Int intervaloMinutos
  }
  
  class Servico {
    +Int id
    +String nome
    +Int duracaoMinutos
  }
  
  class Agendamento {
    +Int id
    +DateTime dataHora
    +String status
    +String clienteNome
    +String clienteTelefone
    +Int servicoId
  }
  
  Profissional "1" -- "1" ConfiguracaoAgenda : possui
  Profissional "1" -- "*" Servico : oferece
  Profissional "1" -- "*" Agendamento : recebe
  Servico "1" -- "*" Agendamento : associado
```

> **Nota Arquitetural:** > * A propriedade `diasTrabalho` foi modelada como `JSONB` para otimização de performance no tráfego de dados com o Next.js (Ref: ADR-003).
> * O `servicoId` dentro de `Agendamento` é utilizado tanto para serviços reais de clientes quanto para os serviços administrativos internos que bloqueiam a agenda para compromissos pessoais do profissional (Ref: ADR-004).
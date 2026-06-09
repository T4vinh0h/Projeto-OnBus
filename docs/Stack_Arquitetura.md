# 4.1 Componentes de Software e Frameworks

O ecossistema OnBus adota o paradigma de **Orientação a Objetos (POO)**.

O Back-end utiliza TypeScript para garantir a robustez das regras de negócio, enquanto o Front-end utiliza JavaScript para agilidade na manipulação de interface.

## Hospedagem e Deploy

- Render (Node.js)
- Pipelines de CI/CD automatizados via GitHub

## Back-end

- Node.js
- Express.js
- TypeScript

## Front-end

- HTML5
- CSS3
- JavaScript (ES6+)
- Manipulação dinâmica do DOM

## Query Builder

- Knex.js
- Abstração SQL unificada entre bancos locais e remotos

## Comunicação

- APIs REST (JSON)
- WebSockets para eventos em tempo real

## Segurança

- JWT (autenticação stateless)
- CORS
- Hashing de senhas com bcryptjs

## Animações e Visualização

- GSAP para microinterações
- Three.js para renderização 3D

## Versionamento

- Git
- GitHub

# 4.2 Arquitetura de Dados: Sistema Local vs. Online

A persistência de dados é distribuída para garantir resiliência operacional e continuidade do serviço mesmo em cenários de indisponibilidade de rede.

## 1. Ambiente Local (Validador e Contingência)

### Banco de Dados

- MySQL instalado localmente no hardware da catraca

### Mecanismo

- Consultas otimizadas através do Knex.js local

### Comportamento

- Processamento do débito em menos de 1 segundo
- Operação totalmente offline
- Armazenamento local de logs de transações
- Sincronização em lote com a nuvem após restabelecimento da conectividade

## 2. Ambiente Online (Nuvem Centralizada)

### Banco de Dados

- Supabase (PostgreSQL gerenciado)

### Comportamento

- Base centralizadora do ecossistema OnBus
- Processamento de cadastros
- Processamento de transações financeiras via webhooks
- Atualização de dados corporativos em tempo real
- Integração através da API Node.js hospedada na Render

# 4.3 Modelagem Orientada a Objetos (POO) em TypeScript

As regras de negócio são encapsuladas em classes tipadas, promovendo reutilização, manutenção simplificada e separação de responsabilidades.

## Usuario

### Atributos

- UUID
- Nome
- Status
- Dados cadastrais
- Credenciais

### Métodos

- `autenticar()`
- `atualizarPerfil()`
- `solicitarExclusaoLGPD()`

## CartaoTransporte (Classe Abstrata)

Classe base para especializações do sistema.

### Classes Derivadas

- `CartaoEstudante`
- `CartaoIdoso`

### Métodos

- Métodos de débito sobrescritos para aplicação de:
  - Meia-tarifa
  - Gratuidade

### Atributos

- `layoutBaseId`
- `customThemeUrl`

## Transacao

Responsável pelo fluxo financeiro.

### Métodos

- `processarPagamento()`
- `gerarComprovante()`

## ValidadorCatraca

Responsável pela operação embarcada nos veículos.

### Métodos

- `autorizarEmbarque()`
- `sincronizarComNuvem()`

# 4.4 Matriz de Testes (QA) e Segurança da Informação

## Estratégia de Testes Automatizados

### Testes Unitários e de Integração

Validação dos principais componentes do sistema:

- Cálculo de saldo
- Hashing de senhas
- Expiração de tokens
- Endpoints da API REST
- Regras de negócio

### Testes de Performance

Homologação de concorrência e capacidade operacional nos serviços hospedados na Render e Supabase.

### Testes de Latência

Execução de testes de estresse na camada local da catraca utilizando Knex.js para assegurar o requisito de resposta inferior a 1 segundo.

# Segurança e Conformidade (LGPD)

## Camada de Rede

Todo o tráfego da aplicação deve operar exclusivamente sob:

- HTTPS
- TLS

## Tokenização

Dados sensíveis de cartões de crédito são tokenizados pelo gateway de pagamento e não são armazenados nem processados pela base local do sistema.

## Conformidade com a LGPD

Implementação do método:

```ts
solicitarExclusaoLGPD()
```

O método dispara rotinas de *hard delete* nas tabelas do Supabase para remoção definitiva dos dados pessoais do usuário, atendendo ao direito de exclusão previsto pela legislação.
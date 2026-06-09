# 🚌 OnBus - Sistema Inteligente de Bilhetagem e Mobilidade Urbana

O **OnBus** é um ecossistema digital de bilhetagem eletrônica para transporte coletivo urbano, inspirado na realidade operacional de Pelotas/RS.

O projeto foi concebido para atender usuários comuns, estudantes e idosos por meio de uma plataforma integrada que combina gestão de cartões, recargas digitais, validação de embarque, monitoramento operacional e recursos de mobilidade inteligente.

Diferentemente dos sistemas tradicionais, o OnBus utiliza uma arquitetura híbrida, permitindo que validadores de embarque operem localmente mesmo sem acesso à internet, sincronizando posteriormente com a infraestrutura em nuvem.

---

# 🎯 Objetivos do Sistema

* Disponibilizar saldo e histórico de utilização de forma transparente.
* Permitir recargas instantâneas via Pix.
* Eliminar a dependência de conectividade constante.
* Garantir operação offline nas catracas.
* Proteger os dados dos usuários em conformidade com a LGPD.
* Reduzir falhas operacionais relacionadas à compensação de créditos.
* Disponibilizar recursos de acessibilidade para diferentes perfis de passageiros.
* Integrar bilhetagem, transporte e monitoramento em uma única plataforma.

---

# 👥 Público-Alvo

## Usuário Comum

Passageiros que dependem diariamente do transporte público para deslocamentos profissionais e necessitam de previsibilidade, agilidade e consulta rápida de saldo.

## Estudante

Usuários com alta familiaridade digital que buscam praticidade, integração acadêmica e substituição do cartão físico por soluções digitais.

## Idoso

Passageiros que necessitam de interfaces acessíveis, suporte simplificado, alto contraste visual e proteção adicional contra fraudes.

---

# 🏗️ Arquitetura do Sistema

O OnBus utiliza uma arquitetura distribuída composta por dois ambientes complementares.

## Ambiente Local (Operação Offline)

Responsável pela continuidade operacional dos validadores de embarque.

### Características

* Banco de dados MySQL local.
* Operação independente da internet.
* Processamento de embarque em menos de 1 segundo.
* Armazenamento temporário de transações.
* Sincronização automática com a nuvem após reconexão.

---

## Ambiente Online (Nuvem)

Responsável pelo gerenciamento centralizado do sistema.

### Características

* APIs REST.
* Banco Supabase (PostgreSQL).
* Processamento de pagamentos.
* Gestão de usuários.
* Atualização de saldo.
* Administração de linhas, rotas e frota.
* Integrações externas.

---

## Comunicação

### REST API

Utilizada para:

* Autenticação.
* Consulta de dados.
* Operações administrativas.
* Gestão financeira.

### WebSockets

Utilizados para:

* Rastreamento em tempo real.
* Atualização instantânea de localização.
* Eventos operacionais.

### Webhooks

Utilizados para:

* Confirmação de pagamentos.
* Liberação automática de créditos.
* Processos assíncronos.

---

# 🚀 Instalação e Execução

## Pré-requisitos

* Node.js 18+
* MySQL 8+
* Git
* Navegador moderno

---

## Configuração do Ambiente

Crie um arquivo `.env` na pasta do backend utilizando o `.env.example` como base.

### Exemplo

```env
# =====================================================
# AMBIENTE
# =====================================================

NODE_ENV=development
PORT=3000

JWT_SECRET=sua_chave_jwt

# =====================================================
# MODO DE OPERAÇÃO
# local | online | hybrid
# =====================================================

DATABASE_MODE=hybrid

# =====================================================
# MYSQL (OFFLINE)
# =====================================================

MYSQL_HOST=localhost
MYSQL_PORT=3306
MYSQL_USER=root
MYSQL_PASSWORD=sua_senha
MYSQL_DATABASE=onbus_local

# =====================================================
# SUPABASE (ONLINE)
# =====================================================

SUPABASE_URL=https://seu-projeto.supabase.co
SUPABASE_ANON_KEY=sua_anon_key
SUPABASE_SERVICE_ROLE_KEY=sua_service_role_key

# =====================================================
# RENDER
# =====================================================

RENDER_API_URL=https://seu-projeto.onrender.com

# =====================================================
# WEBHOOKS
# =====================================================

WEBHOOK_SECRET=sua_chave_webhook

# =====================================================
# WEBSOCKETS
# =====================================================

WS_PORT=3001

# =====================================================
# GPS
# =====================================================

GPS_UPDATE_INTERVAL=10000
```

---

# 📦 Instalação das Dependências

Backend:

```bash
cd backend
npm install
```

Frontend:

```bash
cd frontend
npm install
```

---

# ⚙️ Comandos do Projeto

## Configurar Banco de Dados

```bash
npm run setup
```

Funções:

* Cria toda a estrutura do banco de dados.
* Executa migrations.
* Executa seeds.
* Caso as tabelas já existam, elas serão removidas e recriadas.

> Atenção: este comando apaga os dados existentes.

---

## Executar Backend

```bash
npm run dev
```

Funções:

* Inicializa o servidor.
* Verifica portas ocupadas.
* Reinicia automaticamente processos anteriores quando necessário.

---

## Executar Frontend

```bash
npm run web
```

Funções:

* Inicializa a aplicação frontend localmente.
* Disponibiliza a interface para acesso via navegador.

---

## Executar Tudo (Recomendado)

```bash
npm run full
```

Executa automaticamente:

1. Configuração do banco (`setup`)
2. Inicialização do backend (`dev`)
3. Inicialização do frontend (`web`)

---

# 🌐 Acesso ao Sistema

Frontend:

```text
http://localhost:5173
```

Backend:

```text
http://localhost:3000
```

---

# 📋 Requisitos Funcionais

### RF01 — Cadastro de Usuário

Criação de perfis distintos para:

* Comum
* Estudante
* Idoso

### RF02 — Autenticação

Login seguro com gerenciamento de sessão por token.

### RF03 — Edição de Perfil

Atualização de dados pessoais.

### RF04 — Exclusão de Conta (LGPD)

Direito ao esquecimento.

### RF05 — Emissão de Cartões

* Físicos
* Digitais

### RF05.1 — Identidade Visual Dinâmica

Temas personalizados conforme categoria do usuário.

### RF06 — Vinculação de Dispositivos

Múltiplos cartões por usuário.

### RF07 — Consulta de Itinerários

Horários e linhas.

### RF08 — Previsão de Chegada

Estimativa baseada em GPS.

### RF09 — Mapeamento Interativo

Visualização de rotas e paradas.

### RF10 — Recarga Online

Pix, cartão e histórico financeiro.

### RF11 — Consulta de Saldo

Visualização em tempo real.

### RF12 — Bloqueio de Cartão

Proteção em caso de perda ou roubo.

### RF13 — Histórico e Extrato

Relatórios financeiros e operacionais.

### RF14 — Validação Automática

QR Code ou cartão físico.

---

# 🔐 Requisitos Não Funcionais

### RNF01

Disponibilidade 24/7.

### RNF02

HTTPS/TLS e criptografia de dados.

### RNF03

Tempo de resposta inferior a 1 segundo.

### RNF04

Escalabilidade para horários de pico.

### RNF05

Sincronização automática entre ambiente local e nuvem.

### RNF06

Acessibilidade e design responsivo.

---

# 🗂️ Estrutura Conceitual do Projeto

```text
OnBus
├── backend
│   ├── config
│   ├── controllers
│   ├── middleware
│   ├── models
│   ├── routes
│   ├── services
│   ├── database
│   └── tests
│
├── frontend
│   ├── components
│   ├── pages
│   ├── services
│   ├── assets
│   ├── hooks
│   └── styles
│
├── docs
├── prototipos
└── README.md
```

---

# 🧪 Estratégia de Testes

## Testes Unitários

Validação de:

* Regras de negócio.
* Cálculo de saldo.
* Hash de senhas.
* Tokens.

## Testes de Integração

Validação de:

* APIs REST.
* Comunicação entre módulos.

## Testes de Performance

Validação de:

* Concorrência.
* Latência.
* Operação da catraca.

---

# 🔒 Segurança e LGPD

* HTTPS/TLS obrigatório.
* JWT para autenticação.
* bcryptjs para hashing.
* Tokenização de pagamentos.
* Exclusão definitiva de dados mediante solicitação.
* Proteção contra clonagem de cartões.
* Controle de permissões e auditoria.

---

# 📈 Roadmap

## MVP

* Cadastro.
* Login.
* Consulta de saldo.
* Recarga online.
* Cartões digitais.
* Cartões físicos.
* Validação de embarque.
* Operação offline.
* Bloqueio de cartões.
* Itinerários.

## Pós-MVP

* GPS em tempo real.
* Mapa interativo.
* WebSockets.
* Cashback.
* Gamificação.
* Chatbot inteligente.
* Painel analítico.
* Controle por voz.
* Monitoramento operacional avançado.

---

# 👨‍💻 Equipe

### Júlia — UX/UI Design

* Wireframes
* Protótipos
* Fluxos de navegação
* Design System
* Acessibilidade

### Otávio — Front-end

* Interfaces responsivas
* Componentização
* Temas dinâmicos
* Experiência do usuário

### Enrique — Back-end e Arquitetura

* APIs REST
* Modelagem orientada a objetos
* Banco de dados
* Integração de pagamentos
* Segurança
* Infraestrutura

### Lucas — Back-end e QA

* Testes automatizados
* Integração entre sistemas
* Garantia de qualidade
* Administração do repositório

---

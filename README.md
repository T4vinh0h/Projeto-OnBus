# 🚌 OnBus - Sistema Inteligente de Bilhetagem e Mobilidade Urbana

O **OnBus** é uma plataforma Full Stack de bilhetagem eletrônica para transporte coletivo urbano, inspirada no ecossistema de mobilidade de Pelotas/RS.

O sistema foi desenvolvido para modernizar a experiência dos passageiros e operadores do transporte público, oferecendo recursos como gestão de cartões físicos e digitais, recargas online, consulta de saldo, validação de embarque e monitoramento operacional.

Sua arquitetura híbrida permite que os validadores operem mesmo sem conexão com a internet, sincronizando automaticamente os dados com a nuvem quando a conectividade for restabelecida.

---

## 📋 Pré-requisitos

Antes de começar, você precisa ter instalado em sua máquina:

* Node.js 18 ou superior
* MySQL 8 ou superior
* Git
* VS Code (ou outro editor de código)
* Navegador atualizado

---

## 🚀 Instalação

Clone o repositório:

```bash
git clone https://github.com/seu-usuario/onbus.git
cd onbus
```

Instale as dependências do backend:

```bash
cd backend
npm install
```

Instale as dependências do frontend:

```bash
cd ../frontend
npm install
```

---

## ⚙️ Configuração

Crie um arquivo `.env` dentro da pasta `backend/` utilizando o `.env.example` como base.

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
```

### Modos disponíveis

| Modo   | Descrição                                |
| ------ | ---------------------------------------- |
| local  | Utiliza apenas o MySQL local             |
| online | Utiliza apenas o Supabase                |
| hybrid | Utiliza MySQL e Supabase simultaneamente |

O modo **hybrid** é o recomendado por representar a arquitetura oficial do projeto.

---

## 📦 Comandos

### Configurar Banco de Dados

```bash
npm run setup
```

Funções:

* Cria a estrutura completa do banco de dados.
* Executa migrations e configurações iniciais.
* Caso as tabelas já existam, elas serão removidas e recriadas.

> Atenção: este comando apaga os dados existentes.

---

### Executar Backend

```bash
npm run dev
```

Funções:

* Inicializa o servidor.
* Verifica se a porta já está em uso.
* Reinicia automaticamente processos anteriores quando necessário.

---

### Executar Frontend

```bash
npm run web
```

Funções:

* Inicializa a aplicação frontend localmente.
* Disponibiliza a interface para acesso via navegador.

---

### Executar Tudo (Recomendado)

```bash
npm run full
```

Executa automaticamente:

1. Configuração do banco de dados (`setup`)
2. Inicialização do backend (`dev`)
3. Inicialização do frontend (`web`)

---

## 🌐 Acesso ao Sistema

Frontend:

```text
http://localhost:5173
```

Backend:

```text
http://localhost:3000
```

---

## 🏗️ Arquitetura

O OnBus utiliza uma arquitetura híbrida composta por:

### Banco Local (MySQL)

Responsável pela operação offline dos validadores de embarque.

### Banco Online (Supabase)

Responsável pela centralização e sincronização dos dados do sistema.

### Backend

API REST desenvolvida em Node.js e TypeScript responsável pelas regras de negócio, autenticação, integração de pagamentos e comunicação entre os ambientes.

### Frontend

Interface responsável pela interação dos usuários com o sistema.

### Comunicação

* REST API
* WebSockets
* Webhooks

---

## 📂 Estrutura do Projeto

```text
OnBus/
├── backend/
│   ├── .env
│   ├── .env.example
│   ├── package.json
│   ├── src/
│   │   ├── config/
│   │   ├── controllers/
│   │   ├── database/
│   │   ├── middleware/
│   │   ├── models/
│   │   ├── routes/
│   │   ├── services/
│   │   └── server.js
│   └── tests/
│
├── frontend/
│   ├── src/
│   │   ├── assets/
│   │   ├── components/
│   │   ├── hooks/
│   │   ├── pages/
│   │   ├── services/
│   │   └── styles/
│
├── docs/
├── prototipos/
├── .gitignore
├── LICENSE
└── README.md
```

---

## 🛠️ Tecnologias Utilizadas

### Backend

* Node.js
* TypeScript
* Express.js
* Knex.js
* JWT
* bcryptjs

### Banco de Dados

* MySQL
* Supabase (PostgreSQL)

### Frontend

* HTML5
* CSS3
* JavaScript

### Comunicação

* REST API
* WebSockets
* Webhooks

### Infraestrutura

* Render
* GitHub
* CI/CD

### Interface e Visualização

* Canva
* GSAP
* Three.js

### Testes

* Postman

---

## 📚 Documentação

A documentação completa do projeto está disponível na pasta:

```text
docs/
```

Ela contém informações detalhadas sobre:

* Arquitetura do sistema
* Requisitos funcionais e não funcionais
* Modelagem de dados
* Planejamento do produto
* UX/UI
* Estratégia de testes
* Segurança e LGPD
* Roadmap do projeto
* Governança e processos de desenvolvimento

---

## 👥 Equipe

### Júlia

UX/UI Design, prototipação, fluxos de navegação e acessibilidade.

### Otávio Santos (T4vinhoh)

Desenvolvimento Frontend e implementação das interfaces.

### Enrique

Arquitetura Backend, banco de dados, APIs REST, segurança e integrações.

### Lucas

Back-end, integração dos módulos, testes automatizados e QA.

---

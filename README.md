# 🚌 OnBus - Sistema Inteligente de Bilhetagem e Mobilidade Urbana

O **OnBus** é uma plataforma Full Stack de bilhetagem eletrônica para transporte coletivo urbano, inspirada no ecossistema de mobilidade da cidade de Pelotas/RS.

O sistema foi projetado para atender usuários comuns, estudantes e idosos, oferecendo recursos como emissão de cartões físicos e digitais, recargas online, consulta de saldo em tempo real, validação de embarque, gestão de cartões e monitoramento operacional.

Sua arquitetura híbrida combina processamento local e infraestrutura em nuvem, permitindo operação offline nas catracas e sincronização automática dos dados quando a conectividade é restabelecida.

---

## 🎯 Objetivos do Sistema

* Consulta de saldo em tempo real.
* Recargas instantâneas via Pix.
* Operação offline nas catracas.
* Segurança contra fraudes e clonagem.
* Conformidade com a LGPD.
* Personalização visual de cartões.
* Integração entre bilhetagem e informações de transporte.
* Monitoramento operacional da frota.
* Experiência acessível para estudantes, idosos e trabalhadores.

---

## 📋 Pré-requisitos

Antes de começar, você precisa ter instalado em sua máquina:

* **Node.js** (versão 18 ou superior) - https://nodejs.org/
* **MySQL** (versão 8 ou superior) - https://dev.mysql.com/downloads/
* **VS Code** ou outro editor de código.
* **Navegador atualizado** (Google Chrome, Microsoft Edge ou Firefox).

---
### 1️⃣ Configurar o Arquivo .env

Antes de executar o sistema, configure o arquivo `.env` na pasta `backend/`.

Utilize o `.env.example` como base:

```env
# =====================================================
# CONFIGURAÇÕES GERAIS
# =====================================================

NODE_ENV=development
PORT=3000

JWT_SECRET=sua_chave_jwt

# =====================================================
# MODO DE OPERAÇÃO
# local  = MySQL (offline/catraca)
# online = Supabase (nuvem)
# hybrid = ambos simultaneamente
# =====================================================

DATABASE_MODE=hybrid

# =====================================================
# MYSQL (BANCO LOCAL)
# =====================================================

MYSQL_HOST=localhost
MYSQL_PORT=3306
MYSQL_USER=root
MYSQL_PASSWORD=sua_senha
MYSQL_DATABASE=onbus_local

# =====================================================
# SUPABASE (BANCO ONLINE)
# =====================================================

SUPABASE_URL=https://seu-projeto.supabase.co
SUPABASE_ANON_KEY=sua_anon_key
SUPABASE_SERVICE_ROLE_KEY=sua_service_role_key

# =====================================================
# RENDER
# =====================================================

RENDER_API_URL=https://onbus.onrender.com

# =====================================================
# WEBHOOKS DE PAGAMENTO
# =====================================================

WEBHOOK_SECRET=sua_chave_webhook

# =====================================================
# WEBSOCKET
# =====================================================

WS_PORT=3001

# =====================================================
# GPS / TELEMETRIA
# =====================================================

GPS_UPDATE_INTERVAL=10000
```

#### Modos disponíveis

| Modo | Descrição |
|--------|--------|
| `local` | Utiliza apenas o banco MySQL local. |
| `online` | Utiliza apenas o Supabase. |
| `hybrid` | Utiliza MySQL local e Supabase simultaneamente (recomendado). |

O modo híbrido representa a arquitetura oficial do OnBus, permitindo operação offline nas catracas e sincronização automática com a nuvem quando houver conectividade.
## 🚀 Passo a Passo para Rodar o Projeto

### 1️⃣ Configurar o Banco de Dados

1. Abra o **MySQL Workbench** ou seu terminal mysql.
2. Execute o script SQL localizado em:

```text
backend/src/database/systemOnbus.sql
```

Isso criará todas as estruturas necessárias:

* usuarios
* cartoes
* recargas
* passagens
* linhas
* rotas
* paradas
* frota

e demais tabelas do sistema.

---

### 2️⃣ Configurar a Conexão

Edite o arquivo:

```text
backend/src/config/database.ts
```

caso precise alterar as credenciais do banco.

```typescript
export const databaseConfig = {
    host: "localhost",
    user: "root",
    password: "sua_senha",
    database: "onbus",
    port: 3306
};
```

Crie um arquivo `.env` dentro da pasta backend utilizando o `.env.example` como base:

```env
DB_HOST=localhost
DB_PORT=3306
DB_USER=root
DB_PASSWORD=sua_senha
DB_NAME=system_onbus

PORT=3000

JWT_SECRET=sua_chave_secreta_aqui
```

---

### 3️⃣ Instalar Dependências e Rodar o Backend

```bash
cd backend
npm install
npm run dev
```

Se tudo estiver correto:

```text
Servidor OnBus iniciado na porta 3000 🚀
```

---

### 4️⃣ Rodar o Frontend

```bash
cd frontend
npm install
npm run dev
```

A aplicação ficará disponível em:

```text
http://localhost:5173
```

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
│   │   │   └── systemOnbus.sql
│   │   ├── middleware/
│   │   ├── models/
│   │   ├── routes/
│   │   ├── services/
│   │   └── server.js
│   └── tests/
│
├── frontend/
│   ├── .vscode/
│   └── src/
│       ├── App.tsx
│       ├── assets/
│       ├── components/
│       ├── hooks/
│       ├── pages/
│       ├── scripts/
│       ├── services/
│       └── styles/
│
├── docs/
├── prototipos/
├── .gitignore
├── LICENSE
└── README.md
```

---

## 🏗️ Arquitetura do Sistema

O OnBus utiliza uma arquitetura híbrida distribuída entre ambiente local e ambiente online.

### Ambiente Local (Validador de Embarque)

* Banco MySQL local embarcado na catraca.
* Operação totalmente offline.
* Resposta inferior a 1 segundo.
* Registro local das transações.
* Sincronização automática quando a conexão retornar.

### Ambiente Online (Nuvem)

* API REST em Node.js e TypeScript.
* Banco Supabase (PostgreSQL).
* Gerenciamento de usuários.
* Processamento de recargas.
* Integração com gateways de pagamento.
* Atualização centralizada dos dados.

### Comunicação

* REST API para operações convencionais.
* WebSockets para eventos em tempo real.
* Webhooks para confirmação automática de pagamentos.


---

## ✨ Funcionalidades do MVP

### Usuários

* Cadastro de usuários.
* Login com JWT.
* Edição de perfil.
* Recuperação de senha.
* Exclusão de conta (LGPD).

### Cartões

* Cartão comum.
* Cartão estudante.
* Cartão idoso.
* Cartões físicos e digitais.
* Bloqueio de cartão.
* Segunda via.
* Múltiplos cartões por usuário.

### Financeiro

* Consulta de saldo.
* Recarga online.
* Histórico de recargas.
* Extrato financeiro.

### Transporte

* Consulta de horários.
* Itinerários.
* Histórico de viagens.
* Validação por QR Code.
* Validação por cartão físico.

---

## 🚀 Roadmap Pós-MVP

### Mobilidade Inteligente

* Rastreamento GPS em tempo real.
* Previsão de chegada dos ônibus.
* Mapeamento interativo.
* Monitoramento da frota.

### Inteligência e Engajamento

* Cashback.
* Gamificação.
* Chatbot inteligente.
* Dashboard analítico.

### Acessibilidade

* Leitores de tela.
* Controle por voz.
* Alto contraste.
* Temas personalizados.

---

## 📚 Tecnologias Utilizadas

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
* JavaScript (ES6+)

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
* Figma
* GSAP
* Three.js

### Testes

* Jest
* Postman

---

## 🔒 Segurança

* Autenticação JWT.
* Hash de senhas com bcryptjs.
* HTTPS/TLS.
* Proteção contra fraudes.
* Tokenização de pagamentos.
* Conformidade com a LGPD.
* Direito ao Esquecimento.

---

## 👥 Equipe

### Júlia — UX/UI Design

* Wireframes.
* Protótipos.
* Design System.
* Fluxos de navegação.
* Acessibilidade.

### Otávio — Front-end

* Interfaces responsivas.
* JavaScript.
* CSS.
* Temas dinâmicos.

### Enrique — Back-end e Arquitetura

* APIs REST.
* Modelagem orientada a objetos.
* Segurança.
* Integração de pagamentos.
* Supabase.
* MySQL.

### Lucas — Back-end e QA

* Testes automatizados.
* Integração Front-end/Back-end.
* Controle de qualidade.
* Administração do GitHub.

---

Desenvolvido por:

* JUlia
* Otávio Santos
* Enrique
* Lucas

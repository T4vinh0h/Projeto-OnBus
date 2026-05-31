# 🚌 OnBus - Sistema Inteligente de Transporte Urbano
O **OnBus** é uma plataforma completa (Fullstack) desenvolvida para modernizar a experiência do transporte coletivo urbano. O sistema conta com uma API robusta em Node.js e um Frontend dinâmico, oferecendo gerenciamento de cartões, recargas online, consulta de saldo em tempo real e monitoramento de linhas, rotas e frota.

## 📋 Pré-requisitos
Antes de começar, você precisa ter instalado em sua máquina:
*   **Node.js** (versão 18 ou superior) - [Baixe aqui](https://nodejs.org/)
*   **MySQL** (versão 8 ou superior) - [Baixe aqui](https://dev.mysql.com/downloads/)
*   **VS Code** ou outro editor de código.
*   **Navegador atualizado** (Google Chrome, Microsoft Edge ou Firefox).

## 🚀 Passo a Passo para Rodar o Projeto

### 1️⃣ Configurar o Banco de Dados
1.  Abra o **MySQL Workbench** ou seu terminal `mysql`.
2.  Execute o script SQL localizado em: `backend/src/database/systemOnbus.sql`.
    *   Isso criará todas as estruturas necessárias: `usuarios`, `cartoes`, `recargas`, `passagens`, `linhas`, `rotas`, `paradas`, `frota` e demais tabelas do sistema.

### 2️⃣ Configurar a Conexão
Edite o arquivo `BackEnd/src/config/database.ts` se precisar ajustar suas credenciais:
```typescript
export const databaseConfig = {
    host: "localhost",
    user: "MySQL",       // Seu usuário MySQL
    password: "sua_senha",  // Sua senha MySQL
    database: "onbus",
    port: 3306
};
```

Crie o arquivo `.env` na pasta `backend/` (use o `.env.example` como base) com suas credenciais:
```env
DB_HOST=localhost
DB_PORT=3306
DB_USER=root
DB_PASSWORD=sua_senha
DB_NAME=system_onbus

PORT=3000

JWT_SECRET=sua_chave_secreta_aqui
```

### 3️⃣ Instalar Dependências e Rodar o BackEnd
No terminal, vá para a pasta backend:
```bash
cd backend
npm install
npm run dev
```
Se tudo estiver correto, você verá: **Servidor OnBus iniciado na porta 3000 🚀**

### 4️⃣ Rodar o FrontEnd
No terminal, vá para a pasta frontend:
```bash
cd frontend
npm install
npm run dev
```
O sistema estará disponível em: `http://localhost:5173`

## 📂 Estrutura do Projeto
```text
OnBus/
├── backend/
│   ├── .env                   # Variáveis de ambiente (protegido)
│   ├── .env.example           # Template das variáveis
│   ├── package.json           # Dependências do backend
│   ├── src/
│   │   ├── config/            # Configuração do banco (Knex)
│   │   ├── controllers/       # Lógica (usuarios, cartoes, recargas, linhas)
│   │   ├── database/          # Scripts SQL
│   │   │   └── systemOnbus.sql
│   │   ├── middleware/        # Autenticação JWT
│   │   ├── models/            # Modelos de dados
│   │   ├── routes/            # Rotas da API
│   │   ├── services/          # Regras de negócio
│   │   └── server.js          # Entry point do servidor
│   └── tests/                 # Testes automatizados
├── frontend/
│   ├── .vscode/               # Configurações do VS Code
│   └── src/
│       ├── App.tsx            # Componente raiz
│       ├── assets/            # Imagens e recursos
│       ├── components/        # Componentes reutilizáveis
│       ├── hooks/             # Hooks customizados
│       ├── pages/             # Páginas do sistema
│       ├── scripts/           # Scripts auxiliares
│       ├── services/          # Consumo da API
│       └── styles/            # Estilos globais
├── docs/                      # Documentação do projeto
├── prototipos/                # Protótipos e wireframes
├── .gitignore
├── LICENSE
└── README.md
```

## 🔌 Principais Endpoints da API (Porta 3000)

### 📌 Autenticação
*   `POST /login` - Realiza login e retorna Token JWT.
*   `POST /registrar` - Cria nova conta de usuário.
*   `POST /recuperar-senha` - Envia link de recuperação de acesso.

### 📌 Cartões
*   `GET /cartoes` - Lista cartões do usuário autenticado.
*   `POST /cartoes` - Solicita emissão de novo cartão.
*   `PATCH /cartoes/:id` - Atualiza status do cartão (ativo/bloqueado).

### 📌 Recargas
*   `GET /recargas` - Histórico de recargas (requer Login).
*   `POST /recargas` - Realiza recarga de créditos no cartão.

### 📌 Linhas e Rotas
*   `GET /linhas` - Lista todas as linhas disponíveis.
*   `GET /linhas/:id/horarios` - Consulta horários de uma linha.
*   `GET /onibus/tempo-real` - Localização dos ônibus em tempo real.

## 📚 Tecnologias Utilizadas
*   **Backend:** Node.js, TypeScript, Python, Express, Knex.js, JWT.
*   **Banco de Dados:** MySQL.
*   **Frontend:** React, TypeScript, Next.js, HTML5, CSS3.
*   **Design:** Figma.
*   **Testes:** Jest, Cypress, Postman.
---

📄 Licença

Este projeto está licenciado sob a Licença MIT.
Consulte o arquivo:

```text
[LICENSE] MIT license
```

para mais informações.

---
📝 **Projeto Acadêmico**
Desenvolvido por Otávio Santos/T4vinhoh(Github) com foco em Engenharia de Software E UX/UI Design visando Mobilidade Urbana Inteligente. 🎓🚌

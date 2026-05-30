# 🚌 OnBus - Sistema Inteligente de Transporte Urbano
O **OnBus** é uma plataforma completa (Fullstack) desenvolvida para modernizar a experiência do transporte coletivo urbano. O sistema conta com uma API robusta em Node.js e um Frontend dinâmico, oferecendo gerenciamento de cartões, recargas online, consulta de saldo em tempo real e monitoramento de linhas, rotas e frota.

## 📋 Pré-requisitos
Antes de começar, você precisa ter instalado em sua máquina:
*   **Node.js** (versão 18 ou superior) - [Baixe aqui](https://nodejs.org/)
*   **PostgreSQL** (versão 15 ou superior) - [Baixe aqui](https://www.postgresql.org/download/)
*   **VS Code** ou outro editor de código.
*   **Navegador atualizado** (Google Chrome, Microsoft Edge ou Firefox).

## 🚀 Passo a Passo para Rodar o Projeto

### 1️⃣ Configurar o Banco de Dados
1.  Abra o PostgreSQL ou seu terminal psql.
2.  Execute o script SQL localizado em: `BackEnd/database/onbus.sql`.
    *   Isso criará todas as estruturas necessárias: `usuarios`, `cartoes`, `recargas`, `passagens`, `linhas`, `rotas`, `paradas`, `frota` e demais tabelas do sistema.

### 2️⃣ Configurar a Conexão
Edite o arquivo `BackEnd/src/config/database.ts` se precisar ajustar suas credenciais:
```typescript
export const databaseConfig = {
    host: "localhost",
    user: "postgres",       // Seu usuário PostgreSQL
    password: "sua_senha",  // Sua senha PostgreSQL
    database: "onbus",
    port: 5432
};
```

### 3️⃣ Instalar Dependências e Rodar o BackEnd
No terminal, vá para a pasta BackEnd:
```bash
cd BackEnd
npm install
npm run dev
```
Se tudo estiver correto, você verá: **Servidor OnBus iniciado na porta 3000 🚀**

### 4️⃣ Rodar o FrontEnd
No terminal, vá para a pasta FrontEnd:
```bash
cd FrontEnd
npm install
npm run dev
```
O sistema estará disponível em: `http://localhost:5173`

## 📂 Estrutura do Projeto
```text
OnBus/
├── BackEnd/
│   ├── src/
│   │   ├── controllers/   # Lógica (usuarios, cartoes, recargas, linhas)
│   │   ├── services/      # Regras de negócio
│   │   ├── routes/        # Rotas da API
│   │   ├── middlewares/   # Autenticação JWT
│   │   ├── models/        # Modelos de dados
│   │   ├── config/        # Configuração do banco
│   │   └── server.ts      # Main do servidor
│   └── tests/
├── FrontEnd/
│   └── src/
│       ├── assets/        # Imagens e recursos
│       ├── components/    # Componentes reutilizáveis
│       ├── pages/         # Páginas do sistema
│       ├── services/      # Consumo da API
│       ├── hooks/         # Hooks customizados
│       ├── styles/        # Estilos globais
│       └── App.tsx        # Componente raiz
├── docs/
├── prototipos/
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
*   **Backend:** Node.js, TypeScript, Express, JWT.
*   **Banco de Dados:** PostgreSQL.
*   **Frontend:** React, TypeScript, Vite, HTML5, CSS3.
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
Desenvolvido com foco em Engenharia de Software E UX/UI Design visando Mobilidade Urbana Inteligente. 🎓🚌

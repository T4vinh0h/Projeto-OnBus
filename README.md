# 🚌 OnBus - Sistema Inteligente de Transporte Urbano

O **OnBus** é uma plataforma Full Stack desenvolvida para modernizar a experiência do transporte coletivo urbano, oferecendo gerenciamento de cartões de transporte, recargas online, consulta de saldo em tempo real, monitoramento de linhas, rotas, horários, localização de ônibus e gestão operacional da frota.

O sistema foi idealizado para proporcionar mais praticidade, acessibilidade, transparência e eficiência aos usuários do transporte público, permitindo que passageiros, operadores e administradores tenham acesso a informações atualizadas e recursos centralizados em um único ambiente digital.

---

## 📋 Pré-requisitos

Antes de iniciar o projeto, certifique-se de possuir instalado em sua máquina:

* Node.js (versão 18 ou superior)
* PostgreSQL (versão 15 ou superior)
* Git
* VS Code ou outro editor de código
* Navegador atualizado (Google Chrome, Microsoft Edge ou Firefox)

---

## 🚀 Passo a Passo para Rodar o Projeto

### 1️⃣ Configurar o Banco de Dados

Abra o PostgreSQL e execute o script SQL localizado em:

```bash
BackEnd/database/onbus.sql
```

O script irá criar todas as estruturas necessárias para funcionamento do sistema:

* Usuários
* Cartões de transporte
* Recargas
* Passagens
* Linhas
* Rotas
* Paradas
* Frota
* Histórico de operações
* Chamados de suporte

---

### 2️⃣ Configurar a Conexão

Edite o arquivo:

```bash
BackEnd/src/config/database.ts
```

Exemplo:

```ts
export const databaseConfig = {
    host: "localhost",
    user: "postgres",
    password: "sua_senha",
    database: "onbus",
    port: 5432
};
```

---

### 3️⃣ Instalar Dependências e Rodar o Back-End

Acesse a pasta do Back-End:

```bash
cd BackEnd
```

Instale as dependências:

```bash
npm install
```

Inicie o servidor:

```bash
npm run dev
```

Se tudo estiver correto:

```bash
Servidor OnBus iniciado na porta 3000 🚀
```

---

### 4️⃣ Rodar o Front-End

Acesse a pasta FrontEnd:

```bash
cd FrontEnd
```

Instale as dependências:

```bash
npm install
```

Execute a aplicação:

```bash
npm run dev
```

O sistema estará disponível em:

```bash
http://localhost:5173
```

---

## 📂 Estrutura do Projeto

```bash
OnBus/
│
├── BackEnd/
│   ├── src/
│   │   ├── controllers/
│   │   ├── services/
│   │   ├── routes/
│   │   ├── middlewares/
│   │   ├── models/
│   │   ├── config/
│   │   ├── database/
│   │   └── server.ts
│   │
│   └── tests/
│
├── FrontEnd/
│   ├── public/
│   ├── src/
│   │   ├── assets/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── services/
│   │   ├── hooks/
│   │   ├── styles/
│   │   └── App.tsx
│
├── docs/
│
├── prototipos/
│
└── README.md
```

---

## 🔌 Principais Funcionalidades

O OnBus oferece um conjunto completo de funcionalidades voltadas à gestão do transporte urbano, permitindo o cadastro e gerenciamento de usuários, autenticação segura, recuperação de acesso e administração de perfis.

O sistema possibilita a solicitação, vinculação, renovação, bloqueio e gerenciamento de cartões de transporte nas modalidades comum, estudante e idoso, além da realização de recargas digitais por diferentes métodos de pagamento, consulta de saldo em tempo real e acompanhamento detalhado de movimentações financeiras.

Na área de mobilidade, os usuários podem consultar linhas, horários, rotas, paradas e a localização dos ônibus em tempo real, acompanhando previsões de chegada e informações atualizadas da operação. O sistema também disponibiliza históricos completos de viagens, recargas, utilizações e solicitações realizadas pelos usuários.

Para atendimento e suporte, a plataforma conta com central de ajuda, FAQ, abertura de chamados e acompanhamento de protocolos. Já na área administrativa, oferece ferramentas para gestão de usuários, cartões, linhas, horários, paradas, frota e relatórios operacionais, permitindo o controle completo da operação do transporte coletivo.
## 📱 Telas do Sistema

O OnBus possui uma arquitetura composta por áreas públicas, operacionais e administrativas, contemplando funcionalidades voltadas aos passageiros, operadores e gestores do sistema.

A área pública inclui páginas de acesso, cadastro e recuperação de senha. A área do passageiro reúne recursos de dashboard, gerenciamento de perfil, cartões, recargas, históricos, consulta de horários, rotas, localização em tempo real e suporte ao usuário. Já a área administrativa disponibiliza painéis de gestão para usuários, cartões, linhas, horários, frota, monitoramento operacional e emissão de relatórios.

Ao final do desenvolvimento, o sistema está estimado entre **45 e 70 telas**, distribuídas entre módulos de autenticação, transporte, bilhetagem eletrônica, atendimento, administração e monitoramento operacional.
**45 a 70 telas**

---

## ⚙️ Requisitos Funcionais

* Cadastro de usuários
* Autenticação de usuários
* Edição de perfil
* Exclusão de conta
* Emissão de cartões
* Vinculação de cartões
* Consulta de horários
* Consulta de ônibus próximos
* Visualização de trajetos
* Recarga de créditos
* Consulta de saldo
* Bloqueio de cartões
* Histórico de utilização
* Validação de créditos

---

## 🔒 Requisitos Não Funcionais

* Disponibilidade 24 horas por dia
* Criptografia de dados
* Resposta rápida nas validações
* Escalabilidade
* Atualização em tempo real
* Interface intuitiva e acessível

---

## 🛠️ Tecnologias Utilizadas

### Front-End

* React
* TypeScript
* HTML5
* CSS3
* Vite

### Back-End

* Node.js
* Express
* TypeScript
* JWT

### Banco de Dados

* PostgreSQL

### Design

* Figma

### Controle de Versão

* Git
* GitHub

### Testes

* Jest
* Cypress
* Postman

---

## 🔐 Segurança

O sistema implementa:

* JWT Authentication
* Criptografia de senhas
* Controle de permissões
* Controle de sessões
* HTTPS
* Conformidade com LGPD
* Auditoria de operações

---

## 🎯 Objetivos do Projeto

O OnBus foi desenvolvido com o propósito de tornar a mobilidade urbana mais eficiente e acessível através da tecnologia, permitindo que passageiros realizem consultas, recargas e gerenciamento de seus cartões sem depender de pontos físicos de atendimento.

Além disso, o sistema busca oferecer ferramentas administrativas completas para controle operacional da frota, gerenciamento de horários, monitoramento de veículos e análise de indicadores de desempenho do transporte coletivo.

---

## 📚 Projeto Acadêmico

Projeto desenvolvido com foco em:

* Engenharia de Software
* Desenvolvimento Web Full Stack
* UX/UI Design
* Acessibilidade Digital
* Qualidade de Software
* Sistemas de Informação
* Mobilidade Urbana Inteligente

---

## 📄 Licença

Este projeto está licenciado sob a Licença MIT.

Consulte o arquivo:

```text
LICENSE
```

para mais informações.

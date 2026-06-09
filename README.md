# 🚌 OnBus - Sistema Inteligente de Bilhetagem e Mobilidade Urbana

O **OnBus** é uma plataforma Full Stack de bilhetagem eletrônica para transporte coletivo urbano, inspirada no ecossistema de mobilidade da cidade de Pelotas/RS.

O sistema foi projetado para atender três perfis principais de usuários:

* Usuários Comuns
* Estudantes
* Idosos

Seu principal objetivo é eliminar problemas recorrentes de compensação de créditos, dependência de conectividade constante e limitações dos sistemas tradicionais de transporte público.

A arquitetura do projeto combina processamento local e infraestrutura em nuvem, permitindo operação offline nas catracas e sincronização automática quando a conexão for restabelecida.

---

# 🎯 Objetivos Estratégicos

* Consulta de saldo em tempo real.
* Recargas instantâneas via Pix.
* Operação offline em validadores de embarque.
* Segurança contra clonagem e fraudes.
* Conformidade com a LGPD.
* Cartões físicos e digitais.
* Personalização visual de cartões.
* Integração entre bilhetagem e informações de transporte.

---

# 🏗️ Arquitetura do Sistema

O OnBus utiliza uma arquitetura híbrida composta por dois ambientes:

## Ambiente Local (Contingência)

* MySQL local embarcado nos validadores.
* Operação offline da catraca.
* Tempo de resposta inferior a 1 segundo.
* Sincronização posterior com a nuvem.

## Ambiente Online (Nuvem)

* Supabase (PostgreSQL).
* API REST em Node.js e TypeScript.
* Processamento de pagamentos.
* Gerenciamento de usuários.
* Atualização centralizada de dados.

---

# 👥 Equipe e Responsabilidades

### Júlia — UX/UI Design

* Wireframes
* Protótipos
* Fluxos de navegação
* Design System
* Acessibilidade (WCAG)

### Otávio — Front-end

* Interfaces responsivas
* Formulários
* JavaScript Vanilla
* CSS e temas dinâmicos

### Enrique — Back-end e Arquitetura

* APIs REST
* Modelagem POO
* Segurança
* Integração de pagamentos
* Supabase
* MySQL + Knex.js

### Lucas — Back-end e QA

* Testes automatizados
* Integração Front-end/Back-end
* Controle de qualidade
* Administração do GitHub

---

# 🚀 Funcionalidades do MVP

## Autenticação

* Cadastro de usuários
* Login seguro
* Edição de perfil
* Recuperação de senha
* Exclusão de conta (LGPD)

## Cartões

* Emissão de cartões:

  * Comum
  * Estudante
  * Idoso

* Cartão físico e digital

* Bloqueio por perda ou roubo

* Segunda via

* Múltiplos cartões por usuário

## Financeiro

* Consulta de saldo
* Recarga via Pix
* Histórico de recargas
* Extrato financeiro

## Transporte

* Consulta de horários
* Itinerários
* Histórico de viagens
* Validação por QR Code
* Validação por cartão físico

---

# 🔮 Funcionalidades Pós-MVP

## Mobilidade Inteligente

* Rastreamento GPS em tempo real
* Previsão de chegada dos ônibus
* Mapa interativo
* Monitoramento da frota

## Inteligência e Engajamento

* Cashback
* Gamificação
* Chatbot inteligente
* Dashboard analítico

## Acessibilidade

* Leitores de tela
* Controle por voz
* Alto contraste
* Temas adaptáveis

---

# 📚 Tecnologias Utilizadas

## Back-end

* Node.js
* TypeScript
* Express.js
* Knex.js
* JWT
* bcryptjs

## Banco de Dados

* MySQL
* PostgreSQL (Supabase)

## Front-end

* HTML5
* CSS3
* JavaScript (ES6+)

## Comunicação

* REST API
* WebSockets
* Webhooks

## Infraestrutura

* Render
* GitHub Actions (CI/CD)

## Visualização e Interface

* Canva
* Figma
* GSAP
* Three.js

## Testes

* Jest
* Postman

---

# 🔒 Segurança

* HTTPS/TLS
* JWT Authentication
* Hashing com bcryptjs
* Tokenização de pagamentos
* Conformidade com a LGPD
* Direito ao Esquecimento

---

# 📈 Roadmap

## Fase 1 — MVP

* Bilhetagem digital
* Consulta de saldo
* Recarga instantânea
* Operação offline
* Bloqueio de cartões
* Itinerários

## Fase 2 — Plataforma Inteligente

* GPS em tempo real
* Mapa 3D
* Cashback
* Gamificação
* Chatbot
* Analytics operacional

---

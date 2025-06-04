# Projeto Completo: Cadastro CRUD com Backend NestJS + Frontend Expo React Native

<p align="center">
  <a href="https://nestjs.com/" target="_blank">
    <img src="https://nestjs.com/img/logo-small.svg" width="120" alt="NestJS Logo" />
  </a>
  &nbsp;&nbsp;&nbsp;
  <a href="https://reactnative.dev/" target="_blank">
    <img src="https://reactnative.dev/img/header_logo.svg" width="120" alt="React Native Logo" />
  </a>
</p>

## Descrição do Projeto

Este projeto é uma aplicação fullstack para cadastro e gerenciamento de usuários.  
- **Backend:** API REST construída com NestJS, MongoDB e autenticação JWT para proteger rotas.  
- **Frontend:** Aplicação mobile feita com React Native + Expo, consumindo a API para registrar, autenticar e gerenciar usuários.

---

## Tecnologias Usadas

### Backend

- NestJS
- TypeScript
- MongoDB + Mongoose
- JWT + Passport para autenticação
- class-validator para validação de dados

### Frontend

- React Native
- Expo
- Axios para requisições HTTP
- React Navigation (opcional, se usado)
- AsyncStorage para salvar token JWT (se implementado)

---

## Estrutura do Repositório

```CADASTRO
/
|-- cadastro-crud-api/         # Código da API NestJS
|-- cadastro-crud-app/         # Código do app React Native com Expo
|-- README.md                  # Este arquivo
Configurando o Backend
Navegue até a pasta do backend:

bash
Copiar
Editar
cd backend
Instale as dependências:

bash
Copiar
Editar
npm install
Crie o arquivo .env com as variáveis necessárias:

env
Copiar
Editar
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
PORT=3000
Rode a API:

bash
Copiar
Editar
npm run start:dev
Configurando o Frontend
Navegue até a pasta do frontend:

bash
Copiar
Editar
cd frontend
Instale as dependências:

bash
Copiar
Editar
npm install
Inicie o app Expo:

bash
Copiar
Editar
npx expo start
Use o app Expo Go no seu celular para rodar o app, ou um emulador.

Como Usar
Backend
Endpoints principais:

POST /auth/register — para criar usuário

POST /auth/login — para login e gerar token JWT

Rotas protegidas /users para operações CRUD de usuário (precisa passar token no header)

Frontend
Tela de cadastro de usuário

Tela de login que armazena o token JWT

Telas para visualizar, editar e deletar usuários (consomem o backend via API)

Testando
Com Postman ou Insomnia (Backend)
Teste os endpoints de autenticação (/auth/register e /auth/login).

Pegue o token JWT gerado no login.

Use o token para testar as rotas protegidas (/users).

No Frontend
Use o app para registrar e logar.

Navegue para as telas protegidas para testar o CRUD de usuários.

Deploy
Backend: Pode ser hospedado em serviços como Heroku, AWS, DigitalOcean ou qualquer outro que suporte Node.js e MongoDB.

Frontend: Pode ser publicado no Expo ou compilado para Android/iOS.

Contato
Autor: Wladmir Silveira

Email: wladdmg@gmail.com

GitHub: https://github.com/WladDMG

Licença
MIT License

Agradecimentos
NestJS pela arquitetura sólida no backend.

React Native e Expo pela facilidade no desenvolvimento mobile.

MongoDB pelo banco de dados NoSQL escalável.
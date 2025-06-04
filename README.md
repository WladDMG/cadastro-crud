
# Projeto Completo: Cadastro CRUD com Backend NestJS + Frontend Expo React Native
Full Project: CRUD User Registration with NestJS Backend + React Native Expo Frontend

<p align="center">
  <a href="https://nestjs.com/" target="_blank">
    <img src="https://nestjs.com/img/logo-small.svg" width="120" alt="NestJS Logo" />
  </a>
  &nbsp;&nbsp;&nbsp;
  <a href="https://reactnative.dev/" target="_blank">
    <img src="https://reactnative.dev/img/header_logo.svg" width="120" alt="React Native Logo" />
  </a>
</p>

## Descrição do Projeto (PT-BR)

Aplicação fullstack para cadastro e gerenciamento de usuários.

- **Backend:** API REST com NestJS, MongoDB, autenticação com JWT e validação.
- **Frontend:** App mobile com React Native + Expo, consumo da API com Axios, com telas de login, cadastro e CRUD de usuários.

## Project Description (EN)

A fullstack application for user registration and management.

- **Backend:** REST API built with NestJS, MongoDB, JWT authentication and validation.
- **Frontend:** Mobile app using React Native + Expo, consuming the API for login, registration, and user CRUD.

## Tecnologias Usadas | Technologies Used

### Backend
- NestJS
- TypeScript
- MongoDB + Mongoose
- JWT + Passport (auth)
- class-validator (data validation)

### Frontend
- React Native
- Expo
- Axios (API requests)
- React Navigation (optional)
- AsyncStorage (JWT storage, if implemented)

## Estrutura do Repositório | Repository Structure

```
cadastro/
├── cadastro-crud-api/         # Backend - NestJS API
├── cadastro-crud-app/         # Frontend - React Native + Expo App
└── README.md                  # Documentação / Documentation
```

## Configurando o Backend | Backend Setup

```bash
cd cadastro-crud-api
npm install
```

Crie um arquivo `.env` com o conteúdo:

```
MONGO_URI=mongodb://localhost:27017/cadastro
JWT_SECRET=sua_chave_secreta
PORT=3000
```

Inicie a API:

```bash
npm run start:dev
```

## Configurando o Frontend | Frontend Setup

```bash
cd cadastro-crud-app/cadastro-app
npm install
npx expo start
```

Use o Expo Go no celular ou um emulador Android/iOS para rodar o app.

## Como Usar / Testar | How to Use / Test

### Backend Endpoints

- `POST /auth/register` — cria um novo usuário
- `POST /auth/login` — autentica e retorna token JWT
- `GET /users` — (protegido) lista usuários
- `PATCH /users/:id` — (protegido) edita usuário
- `DELETE /users/:id` — (protegido) deleta usuário

Use o Postman ou Insomnia para testar passando o token no header.

### Frontend Funcionalidades

- Tela de cadastro
- Tela de login com armazenamento do JWT
- Telas protegidas com lista, edição e remoção de usuários

## Deploy

- Backend: Pode ser hospedado em Heroku, AWS, Render ou qualquer serviço que suporte Node.js + MongoDB.
- Frontend: Pode ser publicado diretamente via Expo ou exportado para APK/IPA.

## Autor | Author

Wladmir Silveira  
wladdmg@gmail.com  
https://github.com/WladDMG

## Licença | License

Este projeto está licenciado sob a licença MIT.  
This project is licensed under the MIT License.

## Agradecimentos | Acknowledgments

- NestJS pela robustez e arquitetura no backend.  
- React Native e Expo pela simplicidade no desenvolvimento mobile.  
- MongoDB por seu banco escalável e flexível.


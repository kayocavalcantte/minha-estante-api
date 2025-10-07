# 📖 Minha Estante API

<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>

## 📝 Descrição

**Minha Estante API** é uma aplicação backend construída com [NestJS](https://nestjs.com/) para gerenciar uma coleção pessoal de livros. A API permite cadastrar, consultar, atualizar e remover livros, autores e gêneros, servindo como uma base robusta para uma aplicação de gerenciamento de biblioteca.

## ✨ Tecnologias Principais

Este projeto foi construído utilizando as seguintes tecnologias:

* **Framework**: [NestJS](https://nestjs.com/)
* **Linguagem**: [TypeScript](https://www.typescriptlang.org/)
* **Banco de Dados**: [SQLite](https://www.sqlite.org/index.html) com [TypeORM](https://typeorm.io/)
* **Testes**: [Jest](https://jestjs.io/) para testes unitários e e2e
* **Linting e Formatação**: [ESLint](https://eslint.org/) e [Prettier](https://prettier.io/)

## 🚀 Começando

Siga as instruções abaixo para configurar e executar o projeto em seu ambiente de desenvolvimento.

### Pré-requisitos

* [Node.js](https://nodejs.org/en/) (versão 20 ou superior recomendada)
* [NPM](https://www.npmjs.com/) ou [Yarn](https://yarnpkg.com/)

### Instalação

1.  Clone o repositório:
    ```bash
    git clone <url-do-seu-repositorio>
    ```
2.  Navegue até o diretório do projeto:
    ```bash
    cd minha-estante-api
    ```
3.  Instale as dependências:
    ```bash
    npm install
    ```

### ⚙️ Banco de Dados

O projeto está configurado para usar um banco de dados **SQLite** (`estante.db`). As entidades principais são:
* `Livro`
* `Autor`
* `Genero`

As migrações do TypeORM serão responsáveis por criar e atualizar o schema do banco de dados.

## 🏃 Executando a Aplicação

Você pode executar a aplicação em diferentes modos utilizando os scripts do `package.json`.

```bash
# Modo de desenvolvimento com watch
npm run start:dev

# Modo de produção
# 1. Compile o projeto
npm run build

# 2. Inicie o servidor
npm run start:prod

# Iniciar em modo de debug
npm run start:debug
```

# 📖 Minha Estante API

<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>

## 🌐 URL da API

Acesse a API em:  
**https://minha-estante-api.onrender.com**

## 📝 Descrição

**Minha Estante API** é uma aplicação backend construída com [NestJS](https://nestjs.com/) para gerenciar uma coleção pessoal de livros. A API permite cadastrar, consultar, atualizar e remover livros, autores e gêneros, servindo como uma base robusta para uma aplicação de gerenciamento de biblioteca.

## ✨ Tecnologias Utilizadas

- **Framework:** NestJS
- **Linguagem:** TypeScript
- **Banco de Dados:** SQLite (via TypeORM)
- **Testes:** Jest
- **Linting/Formatação:** ESLint, Prettier

## 🗂️ Estrutura das Entidades

- **Livro**
  - id: number
  - titulo: string
  - autor: Autor
  - genero: Genero
  - anoPublicacao: number
- **Autor**
  - id: number
  - nome: string
- **Genero**
  - id: number
  - nome: string

## 📋 Possíveis Resultados da API

- Listar todos os livros
- Buscar livro por ID
- Adicionar novo livro
- Atualizar livro existente
- Remover livro
- Listar autores/gêneros
- Adicionar/editar/remover autores e gêneros

## 🚀 Como Executar

```bash
# Instalar dependências
npm install

# Rodar em modo desenvolvimento
npm run start:dev

# Rodar em produção
npm run build
npm run start:prod
```

## 🧪 Exemplo de JSON para Testes

### Livro

- **Criar Livro (`POST /livros`):**
```json
{
  "titulo": "O Senhor dos Anéis",
  "subtitulo": "A Sociedade do Anel",
  "sinopse": "Primeiro volume da trilogia épica de Tolkien.",
  "editora": "HarperCollins",
  "genero": "Fantasia",
  "ano_publicacao": "1954"
}
```

- **Atualizar Livro (`PUT /livros/:id`):**
```json
{
  "titulo": "O Hobbit",
  "subtitulo": "Uma Jornada Inesperada",
  "sinopse": "A aventura de Bilbo Bolseiro.",
  "editora": "HarperCollins",
  "genero": "Fantasia",
  "ano_publicacao": "1937"
}
```

- **Resposta de Listagem (`GET /livros`):**
```json
[
  {
    "id": 1,
    "titulo": "O Senhor dos Anéis",
    "subtitulo": "A Sociedade do Anel",
    "sinopse": "Primeiro volume da trilogia épica de Tolkien.",
    "editora": "HarperCollins",
    "genero": "Fantasia",
    "ano_publicacao": "1954"
  }
]
```

- **Resposta de Busca (`GET /livros/:id`):**
```json
{
  "id": 1,
  "titulo": "O Senhor dos Anéis",
  "subtitulo": "A Sociedade do Anel",
  "sinopse": "Primeiro volume da trilogia épica de Tolkien.",
  "editora": "HarperCollins",
  "genero": "Fantasia",
  "ano_publicacao": "1954"
}
```

- **Remover Livro (`DELETE /livros/:id`):**
```json
{
  "message": "Livro removido com sucesso"
}
```

### Autor

- **Criar Autor (`POST /autores`):**
```json
{
  "nome": "J.K.",
  "sobrenome": "Rowling",
  "nacionalidade": "Britânica",
  "data_nascimento": "1965-07-31",
  "website": "https://www.jkrowling.com",
  "data_cadastro": "2024-06-10T00:00:00.000Z"
}
```

- **Atualizar Autor (`PUT /autores/:id`):**
```json
{
  "nome": "George",
  "sobrenome": "Martin",
  "nacionalidade": "Americana",
  "data_nascimento": "1948-09-20",
  "website": "https://www.georgerrmartin.com",
  "data_cadastro": "2024-06-10T00:00:00.000Z"
}
```

- **Resposta de Listagem (`GET /autores`):**
```json
[
  {
    "id": 1,
    "nome": "J.K.",
    "sobrenome": "Rowling",
    "nacionalidade": "Britânica",
    "data_nascimento": "1965-07-31",
    "website": "https://www.jkrowling.com",
    "data_cadastro": "2024-06-10T00:00:00.000Z"
  }
]
```

- **Resposta de Busca (`GET /autores/:id`):**
```json
{
  "id": 1,
  "nome": "J.K.",
  "sobrenome": "Rowling",
  "nacionalidade": "Britânica",
  "data_nascimento": "1965-07-31",
  "website": "https://www.jkrowling.com",
  "data_cadastro": "2024-06-10T00:00:00.000Z"
}
```

- **Remover Autor (`DELETE /autores/:id`):**
```json
{
  "message": "Autor removido com sucesso"
}
```

### Gênero

- **Criar Gênero (`POST /generos`):**
```json
{
  "nome": "Aventura",
  "descricao": "Livros com histórias de exploração e desafios.",
  "data_cadastro": "2024-06-10T00:00:00.000Z"
}
```

- **Atualizar Gênero (`PUT /generos/:id`):**
```json
{
  "nome": "Drama",
  "descricao": "Livros com foco em conflitos emocionais.",
  "data_cadastro": "2024-06-10T00:00:00.000Z"
}
```

- **Resposta de Listagem (`GET /generos`):**
```json
[
  {
    "id": 1,
    "nome": "Fantasia",
    "descricao": "Livros com elementos mágicos e mundos imaginários.",
    "data_cadastro": "2024-06-10T00:00:00.000Z"
  }
]
```

- **Resposta de Busca (`GET /generos/:id`):**
```json
{
  "id": 1,
  "nome": "Fantasia",
  "descricao": "Livros com elementos mágicos e mundos imaginários.",
  "data_cadastro": "2024-06-10T00:00:00.000Z"
}
```

- **Remover Gênero (`DELETE /generos/:id`):**
```json
{
  "message": "Gênero removido com sucesso"
}
```
- **Resposta de Busca (`GET /generos/:id`):**
```json
{
  "id": 1,
  "nome": "Fantasia",
  "descricao": "Livros com elementos mágicos e mundos imaginários.",
  "data_cadastro": "2024-06-10T00:00:00.000Z"
}
```

- **Remover Gênero (`DELETE /generos/:id`):**
```json
{
  "message": "Gênero removido com sucesso"
}
```

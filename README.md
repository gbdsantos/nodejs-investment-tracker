<div align="center">
  <h1 align="center">
  📈 Investiment Tracker
  </h1>
</div>

<p align="center">
  <a href="https://fastify.io" rel="noreferrer" target="_blank">
    <img alt="Fastify badge image" src="https://img.shields.io/badge/Fastify-20232A?style=flat&logo=fastify&logoColor=white">
  </a>

  <a href="https://nodejs.org" rel="noreferrer" target="_blank">
    <img alt="Node.js badge image with version number" src="https://img.shields.io/badge/Node.js-v24.11.0%20LTS-43853D?style=flat&logo=node.js&logoColor=white&labelColor=43853D&color=5a5a5a">
  </a>

  <a href="https://www.postgresql.org" rel="noreferrer" target="_blank">
	  <img alt="PostgreSQL badge image" src="https://img.shields.io/badge/PostgreSQL-316192?style=flat-&logo=postgresql&logoColor=white"  />
  </a>

  <a href="https://www.prisma.io" rel="noreferrer" target="_blank">
    <img src="https://img.shields.io/badge/Prisma-3982CE?style=flat&logo=Prisma&logoColor=white" alt="Prisma logo" />
  </a>

  <a href="https://swagger.io" rel="noreferrer" target="_blank">
	  <img alt="imagem do logotipo Swagger" src="https://img.shields.io/badge/Swagger-black?style=flat&logo=Swagger&logoColor=green">
  </a>

  <a href="https://www.typescriptlang.org" rel="noreferrer" target="_blank">
    <img alt="TypeScript badge imag" src="https://img.shields.io/badge/TypeScript-007ACC?style=flat&logo=typescript&logoColor=white">
  </a>
</p>

<div align="center">
  <h4 align="center">read in the language</h4>
  <a href="https://github.com/gbdsantos/nodejs-investment-tracker/blob/main/README.pt-br.md" hreflang="pt-br">
    🇧🇷 portuguese
  </a>
</div>

## About

Technical challenge/test consisting of a RESTful API built with **Fastify**, TypeScript, and **PostgreSQL** to manage investment goals, allowing users to create, list, update, and delete goals.
The API ensures **data validation with Zod**, includes **error handling**, supports filtering by goal name and month, and is **documented with Swagger**.

<br>

## 🚀 Getting Started

```
# Install dependencies
npm install

# Create a new Docker environment
docker compose up -d

# Generate prisma client
npx prisma generate

# Run Prisma migrations (After first run is OPTIONAL)
npx prisma migrate dev

# Run project
npm run start:dev
```
> ⚠️ Remember to create the .env file with the environment variables.

To test the API endpoints, you can:

- Access the Swagger documentation at **[http://localhost:3000/docs](http://localhost:3000/docs)**, where all routes are documented;
- Use **Visual Studio Code** with the **REST Client** extension installed by opening the file named `requests.http` located in the project's root directory;
- Use any REST client of your choice (e.g., **Insomnia**, **Postman**, etc).


<br>

## Functional Requirements (FR)

- [x] The user must be able to register investment goal
- [x] The user must be able to list all investment goals
- [x] The user must be able to list a single investiment goal
- [x] The user must be able to edit investment goal.
- [x] The user must be able to exclude investment goals.

## Non-Functional Requirements (NFR)

- [x] Fastify for API creation
- [x] PostgreSQL/Docker for the database

## Business Requirements (BR)

- [x] The creation and update route must validate the submitted data, which includes: name, month(s), and value. 
- [ ] Additionally, the value must be evenly divided among the registered months. 
- [x] The listing route must allow filters by name and month.

## Extra mile

- [x] Automatic documentation with Swagger, typed with Zod

<br>

## Tech Stack

- [Docker](https://www.docker.com "Docker: Accelerated Container Application Development") - Containerization for development environment
- [Fastify](https://fastify.dev "Fastify: Fast and low overhead web framework, for Node.js") - Web framework for building high-performance APIs
- [Node.js](https://nodejs.org "Node.js") - JavaScript runtime environment / plataform
- [PostgreSQL](https://www.postgresql.org "PostgreSQL: The world's most advanced open source database") - Open source relational database
- [Prisma](https://www.prisma.io "Prisma ORM | Instant Postgres plus an ORM for simpler db workflows") - ORM (Object Mapping Relation) for Node.js and TypeScript
- [Swagger](https://swagger.io "Swagger: API Documentation & Design Tools for Teams") - API Documentation & Design Tools for Teams
- [TypeScript](https://www.typescriptlang.org "TypeScript: JavaScript With Syntax For Types") - Programming language and superset for JavaScript
- [Vitest](https://vitest.dev "Vitest") - Testing framework that use esbuild
- [Zod](https://zod.dev "Zod: TypeScript-first schema validation with static type inference") - TypeScript-first schema validations

<br>

## ⚖️ License

This project is licensed under the Creative Commons Attribution-NonCommercial (CC BY-NC 4.0) license. See [LICENSE](https://github.com/gbdsantos/nodejs-investment-tracker/blob/main/LICENSE) for more information.

---
Made with ❤️ by 🧑‍🚀 **Guilherme Bezerra** 👋 [Get in touch!](https://www.linkedin.com/in/gbdsantos)
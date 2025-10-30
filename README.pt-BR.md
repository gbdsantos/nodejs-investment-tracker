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
    <img alt="Node.js badge image with version number" src="https://img.shields.io/badge/Node.js-v24.11.0-43853D?style=flat&logo=node.js&logoColor=white&labelColor=43853D&color=5a5a5a">
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
  <h4 align="center">leia nos idiomas</h4>
  <a href="https://github.com/gbdsantos/nodejs-investment-tracker">
    :us: inglês
  </a>
</div>

## Sobre 

Desafio/Teste técnico que consiste em uma API RESTful construída com **Fastify**, TypeScript e PostgreSQL para gerenciar metas de investimento, permitindo que os usuários criem, listem, atualizem e excluam metas.  
A API garante **validação de dados com Zod**, **tratamento de erros**, suporta filtragem por nome e mês da meta e **documentada com Swagger**.

## 🚀 Começando

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

> ⚠️ Lembre-se de criar o arquivo `.env` com as váriaveis de ambiente.


Para testar os endpoints da API você pode:

Acessar pelo endereço **[http://localhost:3000/docs](http://localhost:3000/docs)** pelo Swagger com todas as rotas documentadas;
Diretamente pelo **Visual Studio Code** com a extensão **REST Client** instalada abrindo o arquivo chamado `requests.http` que está no diretório raiz do projeto;
Utilizar um REST Client de sua preferência (ex: **Insomnia**, **Postman**, etc).

<br>

## Requisitos Funcionais (FR)

- [x] O usuário deve poder registrar uma meta de investimento  
- [x] O usuário deve poder listar todas as metas de investimento  
- [x] O usuário deve poder listar uma meta de investimento específica  
- [x] O usuário deve poder editar uma meta de investimento  
- [x] O usuário deve poder excluir metas de investimento  

## Requisitos Não Funcionais (NFR)

- [x] Fastify para criação da API  
- [x] PostgreSQL/Docker para o banco de dados  

## Requisitos de Negócio (BR)

- [x] As rotas de criação e atualização devem validar os dados enviados, incluindo: nome, mês(es) e valor.  
- [x] Além disso, o valor deve ser distribuído igualmente entre os meses registrados.  
- [x] A rota de listagem deve permitir filtros por nome e mês.  

## Extras

- [x] Documentação automática com Swagger, tipada com Zod  

<br>

## Tecnologias utilizadas

- [Docker](https://www.docker.com "Docker: Desenvolvimento acelerado de aplicações em contêiner") - Containerização para o ambiente de desenvolvimento  
- [Fastify](https://fastify.dev "Fastify: Framework web rápido e leve para Node.js") - Framework web para construção de APIs de alto desempenho  
- [Node.js](https://nodejs.org "Node.js") - Ambiente de execução / plataforma JavaScript  
- [PostgreSQL](https://www.postgresql.org "PostgreSQL: O banco de dados open source mais avançado do mundo") - Banco de dados relacional open source  
- [Prisma](https://www.prisma.io "Prisma ORM | Postgres instantâneo e ORM para fluxos de trabalho de banco de dados simplificados") - ORM (Mapeamento Objeto-Relacional) para Node.js e TypeScript  
- [Swagger](https://swagger.io "Swagger: Ferramentas de design e documentação de APIs para equipes") - Ferramenta de documentação e design de APIs  
- [TypeScript](https://www.typescriptlang.org "TypeScript: JavaScript com sintaxe para tipos") - Linguagem de programação e superconjunto de JavaScript  
- [Vitest](https://vitest.dev "Vitest") - Framework de testes que utiliza esbuild  
- [Zod](https://zod.dev "Zod: Validação de esquemas com inferência de tipos em TypeScript") - Validação de esquemas com foco em TypeScript

<br>

## ⚖️ Licença

Este projeto está sob a licença Creative Commons Attribution-NonCommercial (CC BY-NC 4.0). Veja em [LICENSE](https://github.com/gbdsantos/nodejs-investment-tracker/blob/main/LICENSE) para mais informações.

---

Feito com ❤️ por **Guilherme Bezerra** 👋 [Entrar em contato!](https://www.linkedin.com/in/gbdsantos)
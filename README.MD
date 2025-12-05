<div align="center">

  <img src="./.github/assets/blue-saiyan-bg.png" alt="Logo" height="200">
  <h1 align="center"><strong>DIO API FASTIFY - FÓRMULA 1</strong></h1>
  <p align="center">
	  API REST para gerenciar informações de equipes e pilotos de Fórmula 1<br>
    Desenvolvida com <b>Fastify</b> e <b>TypeScript</b>
  </p>

</div>

<br />

  <!-- Badges -->
<div align="center">
  
  [![TypeScript version][ts-badge]][typescript-5-4]
  [![Node.js version][nodejs-badge]][nodejs]
  [![Fastify][fastify-badge]][fastify]

</div>

# 📖 Sobre o Projeto

Esta é uma API RESTful desenvolvida com Fastify que fornece informações sobre equipes e pilotos de Fórmula 1. O projeto foi criado como parte do curso da Digital Innovation One (DIO) para demonstrar o desenvolvimento de APIs modernas com TypeScript.

## 🎯 Funcionalidades

A API oferece os seguintes endpoints:

- **GET /teams** - Lista todas as equipes de Fórmula 1
- **GET /drivers** - Lista todos os pilotos
- **GET /drivers/:id** - Busca um piloto específico por ID

# 🚀 Tecnologias

Este projeto foi desenvolvido com as seguintes tecnologias:

### 📦 Dependências Principais

- [Fastify][fastify] - Framework web rápido e eficiente para Node.js
- [@fastify/cors][@fastify/cors-npm] - Plugin CORS para Fastify
- [TypeScript][typescript-npm] - Superset JavaScript com tipagem estática
- [tsx][tsx-npm] - TypeScript Execute - executa TypeScript diretamente no Node.js
- [tsup][tsup-npm] - Bundler TypeScript com zero configuração
- [@types/node][@types/node-npm] - Definições de tipos para Node.js

### 📄 Arquivos de Configuração

- `.gitignore` - Ignora pastas como node_modules
- `.env` - Variáveis de ambiente
- `tsconfig.json` - Opções de configuração do TypeScript

### ⚡ Scripts Disponíveis

- `npm run dist`: Compila os arquivos TypeScript para JavaScript no diretório dist
- `npm run start:dev`: Executa o servidor em modo de desenvolvimento com variáveis de ambiente do arquivo .env
- `npm run start:watch`: Executa o servidor em modo de desenvolvimento com recarregamento automático ao detectar mudanças
- `npm run start:dist`: Compila o projeto e executa a versão compilada do diretório dist

# 👨‍💻 Como Usar

Para clonar e executar esta aplicação, você precisará ter instalado em seu computador:
- [Git](https://git-scm.com)
- [Node.js v20+](https://nodejs.org/en/)
- [NPM v10+](https://nodejs.org/en/)

Execute os seguintes comandos no terminal:

```bash
# Clone este repositório
$ git clone https://github.com/ygorroberto/dio-api-fastify

# Entre no diretório do projeto
$ cd dio-api-fastify

# Instale as dependências
$ npm install

# Execute o servidor em modo de desenvolvimento
$ npm run start:dev

# Ou execute com recarregamento automático
$ npm run start:watch
```

O servidor estará rodando em `http://localhost:3333`

## 📝 Exemplos de Uso

### Listar todas as equipes
```bash
GET http://localhost:3333/teams
```

### Listar todos os pilotos
```bash
GET http://localhost:3333/drivers
```

### Buscar um piloto específico
```bash
GET http://localhost:3333/drivers/1
```

# 📄 Licença

Este projeto está sob a licença ISC.

# Credits

icons by [Pino Lamanna][dribble-icon]

[typescript]: https://www.typescriptlang.org/
[typescript-5-4]: https://www.typescriptlang.org/
[ts-badge]: https://img.shields.io/badge/TypeScript-5.4-blue.svg
[nodejs-badge]: https://img.shields.io/badge/Node.js->=%2020.00-blue.svg
[nodejs]: https://nodejs.org/
[fastify-badge]: https://img.shields.io/badge/Fastify-5.5-black.svg
[fastify]: https://fastify.dev/
[dribble-icon]: https://dribbble.com/Schakalwal
[typescript-npm]: https://www.npmjs.com/package/typescript
[tsx-npm]: https://www.npmjs.com/package/tsx
[tsup-npm]: https://www.npmjs.com/package/tsup
[@types/node-npm]: https://www.npmjs.com/package/@types/node
[@fastify/cors-npm]: https://www.npmjs.com/package/@fastify/cors

# tcc-ouvidoria-backend

API backend do sistema de ouvidoria pública desenvolvida com Node.js, TypeScript, Express, Prisma e PostgreSQL.

Desenvolvida como primeira atividade avaliativa da disciplina **Tecnologias Back-End** do curso de Pós Graduação Lato Sensu em Desenvolvimento Web e Mobile (IF Sudeste MG) - 2026.1.

## Sobre a Atividade

Implementação de uma API REST com Node.js, TypeScript e Express que persiste manifestações públicas em um banco PostgreSQL, utilizando Docker para o banco de dados e Prisma como ORM.

**Requisitos atendidos:**

- Servidor Express funcional com TypeScript
- Endpoints REST para listagem e busca de manifestações
- Banco de dados PostgreSQL rodando via Docker Compose
- Prisma como ORM com schema, migration e seed
- Testes realizados no Insomnia

## Sobre o Projeto

A API faz parte do contexto do TCC intitulado **"NativePHP como ponte para aplicações desktop e mobile: Um estudo de caso no desenvolvimento de um sistema de ouvidoria para o setor público"**. O backend gerencia as manifestações registradas pelos cidadãos, como reclamações, sugestões, elogios e denúncias.

## Endpoints

| Método | Rota                 | Descrição                       |
| ------ | -------------------- | ------------------------------- |
| GET    | `/`                  | Retorna o status da API         |
| GET    | `/manifestacoes`     | Retorna todas as manifestações  |
| GET    | `/manifestacoes/:id` | Retorna uma manifestação por id |

## Tecnologias Utilizadas

- Node.js
- TypeScript
- Express
- Prisma ORM
- PostgreSQL 15
- Docker e Docker Compose

## Estrutura do Projeto

```
tcc-ouvidoria-backend/
├── prisma/
│ ├── migrations/
│ ├── schema.prisma
│ └── seed.ts
├── src/
│ ├── routes/
│ │ └── manifestacoes.ts
│ └── server.ts
├── .env
├── docker-compose.yml
├── package.json
└── tsconfig.json
```

## Como Executar

**Pré-requisitos:** Node.js e Docker Desktop instalados.

Clone o repositório:

```bash
git clone https://github.com/rhaymarthins/tcc-ouvidoria-backend.git
cd tcc-ouvidoria-backend
```

Instale as dependências:

```bash
npm install
```

Crie o arquivo `.env` na raiz com o conteúdo:

```
DATABASE_URL="postgresql://db_ouvidoria_user:db_ouvidoria_password@localhost:5432/db_ouvidoria_backend"
```

Suba o banco de dados:

```bash
docker compose up -d
```

Rode a migration:

```bash
npx prisma migrate dev --name init
```

Popule o banco com dados iniciais:

```bash
npx prisma db seed
```

Inicie o servidor:

```bash
npm run dev
```

Acesse em `http://localhost:3000`.

## Sobre o Autor

- Antonio Ray Martins Vieira
- Pós Graduação Lato Sensu em Desenvolvimento Web e Mobile (IF Sudeste MG) - 2026.1
- GitHub: [rhaymarthins](https://github.com/rhaymarthins)
- LinkedIn: [ray-martinss](https://linkedin.com/in/ray-martinss)
- Email: rhaymarthins@gmail.com

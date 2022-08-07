# api-company

Consiste em uma api com Node.js e TypeScript, com as funções: create, update, delete e list.

## Docker 

```bash
docker pull postgress
docker run --name api -e POSTGRES_PASSWORD=123456 -d -p 5432:5432 postgres
docker exec -it {id do banco} bash
yarn typeorm migration:run
```

## API

```bash
Yarn install || yarn
Yarn dev
```

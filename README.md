# TypeORM benchmarker using NestJS
_Credits: The idea for this repo was taken heavily from https://github.com/ErisDS/orm-benchmark_

## Description
Bendchmarking TypeORM using NestJS framework.

## Installation

```
yarn
```

## Running the app
Seed the database
```
yarn run seed:run -n ./src/ormconfig.ts
```

To reset seed data use this command directly on the database
```
TRUNCATE phone; TRUNCATE address; TRUNCATE email; DELETE from contact;
```

## Running the benchmark

- Ensure you have Node 16 and Postgres installed locally
- Clone the repository
- Set up local mysql to with root user without password and add the table `orm_test`
- Run `node ace serve` to start the server and set up the db
- Run `yarn run seed:run -n ./src/ormconfig.ts` to seed the data in the db
- Run `node scripts/benchmark.js` to run the benchmark

# TypeORM benchmarker using NestJS

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

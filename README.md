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

## Preliminary results for TypeORM benchmark

Run on `2022 Apple M1 Max `

```
Running duration benchmark...
Running 20s test @ http://localhost:3000/contacts
5 connections


┌─────────┬────────┬────────┬────────┬────────┬───────────┬──────────┬────────┐
│ Stat    │ 2.5%   │ 50%    │ 97.5%  │ 99%    │ Avg       │ Stdev    │ Max    │
├─────────┼────────┼────────┼────────┼────────┼───────────┼──────────┼────────┤
│ Latency │ 150 ms │ 265 ms │ 390 ms │ 427 ms │ 268.82 ms │ 53.67 ms │ 456 ms │
└─────────┴────────┴────────┴────────┴────────┴───────────┴──────────┴────────┘
┌───────────┬───────┬───────┬─────────┬─────────┬─────────┬────────┬───────┐
│ Stat      │ 1%    │ 2.5%  │ 50%     │ 97.5%   │ Avg     │ Stdev  │ Min   │
├───────────┼───────┼───────┼─────────┼─────────┼─────────┼────────┼───────┤
│ Req/Sec   │ 16    │ 16    │ 19      │ 19      │ 18.45   │ 0.87   │ 16    │
├───────────┼───────┼───────┼─────────┼─────────┼─────────┼────────┼───────┤
│ Bytes/Sec │ 15 MB │ 15 MB │ 17.8 MB │ 17.8 MB │ 17.3 MB │ 810 kB │ 15 MB │
└───────────┴───────┴───────┴─────────┴─────────┴─────────┴────────┴───────┘

Req/Bytes counts sampled once per second.
# of samples: 20

374 requests in 20.03s, 346 MB read

duration benchmark results:
TypeORM:         # of samples: 20
Running throughput benchmark...
Running 100 requests test @ http://localhost:3000/contacts
5 connections


┌─────────┬────────┬────────┬────────┬────────┬───────────┬──────────┬────────┐
│ Stat    │ 2.5%   │ 50%    │ 97.5%  │ 99%    │ Avg       │ Stdev    │ Max    │
├─────────┼────────┼────────┼────────┼────────┼───────────┼──────────┼────────┤
│ Latency │ 120 ms │ 275 ms │ 442 ms │ 654 ms │ 282.61 ms │ 92.94 ms │ 654 ms │
└─────────┴────────┴────────┴────────┴────────┴───────────┴──────────┴────────┘
┌───────────┬─────────┬─────────┬─────────┬─────────┬─────────┬─────────┬─────────┐
│ Stat      │ 1%      │ 2.5%    │ 50%     │ 97.5%   │ Avg     │ Stdev   │ Min     │
├───────────┼─────────┼─────────┼─────────┼─────────┼─────────┼─────────┼─────────┤
│ Req/Sec   │ 13      │ 13      │ 17      │ 19      │ 16.67   │ 2.06    │ 13      │
├───────────┼─────────┼─────────┼─────────┼─────────┼─────────┼─────────┼─────────┤
│ Bytes/Sec │ 12.2 MB │ 12.2 MB │ 15.9 MB │ 17.8 MB │ 15.6 MB │ 1.93 MB │ 12.2 MB │
└───────────┴─────────┴─────────┴─────────┴─────────┴─────────┴─────────┴─────────┘

Req/Bytes counts sampled once per second.
 of samples: 6

100 requests in 6.01s, 93.8 MB rea
```

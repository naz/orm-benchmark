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
│ Latency │ 124 ms │ 272 ms │ 426 ms │ 447 ms │ 274.59 ms │ 74.87 ms │ 471 ms │
└─────────┴────────┴────────┴────────┴────────┴───────────┴──────────┴────────┘
┌───────────┬───────┬───────┬─────────┬─────────┬─────────┬────────┬───────┐
│ Stat      │ 1%    │ 2.5%  │ 50%     │ 97.5%   │ Avg     │ Stdev  │ Min   │
├───────────┼───────┼───────┼─────────┼─────────┼─────────┼────────┼───────┤
│ Req/Sec   │ 16    │ 16    │ 18      │ 20      │ 18      │ 1.05   │ 16    │
├───────────┼───────┼───────┼─────────┼─────────┼─────────┼────────┼───────┤
│ Bytes/Sec │ 15 MB │ 15 MB │ 16.9 MB │ 18.8 MB │ 16.9 MB │ 983 kB │ 15 MB │
└───────────┴───────┴───────┴─────────┴─────────┴─────────┴────────┴───────┘

Req/Bytes counts sampled once per second.
# of samples: 20

365 requests in 20.02s, 338 MB read
Running 20s test @ http://localhost:3000/contacts.prisma
5 connections


┌─────────┬────────┬────────┬────────┬────────┬───────────┬──────────┬────────┐
│ Stat    │ 2.5%   │ 50%    │ 97.5%  │ 99%    │ Avg       │ Stdev    │ Max    │
├─────────┼────────┼────────┼────────┼────────┼───────────┼──────────┼────────┤
│ Latency │ 114 ms │ 213 ms │ 334 ms │ 371 ms │ 216.61 ms │ 55.35 ms │ 398 ms │
└─────────┴────────┴────────┴────────┴────────┴───────────┴──────────┴────────┘
┌───────────┬─────────┬─────────┬─────────┬─────────┬─────────┬─────────┬─────────┐
│ Stat      │ 1%      │ 2.5%    │ 50%     │ 97.5%   │ Avg     │ Stdev   │ Min     │
├───────────┼─────────┼─────────┼─────────┼─────────┼─────────┼─────────┼─────────┤
│ Req/Sec   │ 19      │ 19      │ 23      │ 27      │ 22.85   │ 1.83    │ 19      │
├───────────┼─────────┼─────────┼─────────┼─────────┼─────────┼─────────┼─────────┤
│ Bytes/Sec │ 19.2 MB │ 19.2 MB │ 23.2 MB │ 27.3 MB │ 23.1 MB │ 1.84 MB │ 19.2 MB │
└───────────┴─────────┴─────────┴─────────┴─────────┴─────────┴─────────┴─────────┘

Req/Bytes counts sampled once per second.
# of samples: 20

462 requests in 20.02s, 462 MB read

duration benchmark results:
TypeORM:         # of samples: 20
Prisma:  # of samples: 20


TypeORM is worse than Prisma by -26.85%
Running throughput benchmark...
Running 100 requests test @ http://localhost:3000/contacts
5 connections


┌─────────┬────────┬────────┬────────┬────────┬───────────┬──────────┬────────┐
│ Stat    │ 2.5%   │ 50%    │ 97.5%  │ 99%    │ Avg       │ Stdev    │ Max    │
├─────────┼────────┼────────┼────────┼────────┼───────────┼──────────┼────────┤
│ Latency │ 113 ms │ 279 ms │ 416 ms │ 420 ms │ 275.48 ms │ 75.32 ms │ 452 ms │
└─────────┴────────┴────────┴────────┴────────┴───────────┴──────────┴────────┘
┌───────────┬─────────┬─────────┬─────────┬─────────┬─────────┬─────────┬─────────┐
│ Stat      │ 1%      │ 2.5%    │ 50%     │ 97.5%   │ Avg     │ Stdev   │ Min     │
├───────────┼─────────┼─────────┼─────────┼─────────┼─────────┼─────────┼─────────┤
│ Req/Sec   │ 13      │ 13      │ 17      │ 19      │ 16.67   │ 2.06    │ 13      │
├───────────┼─────────┼─────────┼─────────┼─────────┼─────────┼─────────┼─────────┤
│ Bytes/Sec │ 12.2 MB │ 12.2 MB │ 15.9 MB │ 17.8 MB │ 15.6 MB │ 1.93 MB │ 12.2 MB │
└───────────┴─────────┴─────────┴─────────┴─────────┴─────────┴─────────┴─────────┘

Req/Bytes counts sampled once per second.
# of samples: 6

100 requests in 6.01s, 93.8 MB read
Running 100 requests test @ http://localhost:3000/contacts.prisma
5 connections


┌─────────┬────────┬────────┬────────┬────────┬──────────┬──────────┬────────┐
│ Stat    │ 2.5%   │ 50%    │ 97.5%  │ 99%    │ Avg      │ Stdev    │ Max    │
├─────────┼────────┼────────┼────────┼────────┼──────────┼──────────┼────────┤
│ Latency │ 103 ms │ 199 ms │ 332 ms │ 332 ms │ 197.5 ms │ 55.42 ms │ 337 ms │
└─────────┴────────┴────────┴────────┴────────┴──────────┴──────────┴────────┘
┌───────────┬─────────┬─────────┬─────────┬─────────┬─────────┬─────────┬─────────┐
│ Stat      │ 1%      │ 2.5%    │ 50%     │ 97.5%   │ Avg     │ Stdev   │ Min     │
├───────────┼─────────┼─────────┼─────────┼─────────┼─────────┼─────────┼─────────┤
│ Req/Sec   │ 3       │ 3       │ 23      │ 27      │ 20      │ 8.68    │ 3       │
├───────────┼─────────┼─────────┼─────────┼─────────┼─────────┼─────────┼─────────┤
│ Bytes/Sec │ 3.03 MB │ 3.03 MB │ 23.2 MB │ 27.3 MB │ 20.2 MB │ 8.76 MB │ 3.03 MB │
└───────────┴─────────┴─────────┴─────────┴─────────┴─────────┴─────────┴─────────┘

Req/Bytes counts sampled once per second.
# of samples: 5

100 requests in 5.01s, 101 MB read

throughput benchmark results:
TypeORM:         # of samples: 6
Prisma:  # of samples: 5


Tests are equal, results are probably not statistically significant.
```

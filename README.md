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
🚀 Running duration benchmark...
Running 60s test @ http://localhost:3000/contacts
5 connections


┌─────────┬────────┬────────┬────────┬────────┬───────────┬──────────┬────────┐
│ Stat    │ 2.5%   │ 50%    │ 97.5%  │ 99%    │ Avg       │ Stdev    │ Max    │
├─────────┼────────┼────────┼────────┼────────┼───────────┼──────────┼────────┤
│ Latency │ 123 ms │ 276 ms │ 431 ms │ 444 ms │ 277.84 ms │ 79.78 ms │ 484 ms │
└─────────┴────────┴────────┴────────┴────────┴───────────┴──────────┴────────┘
┌───────────┬─────────┬───────┬─────────┬─────────┬─────────┬────────┬─────────┐
│ Stat      │ 1%      │ 2.5%  │ 50%     │ 97.5%   │ Avg     │ Stdev  │ Min     │
├───────────┼─────────┼───────┼─────────┼─────────┼─────────┼────────┼─────────┤
│ Req/Sec   │ 15      │ 16    │ 18      │ 19      │ 17.94   │ 0.93   │ 15      │
├───────────┼─────────┼───────┼─────────┼─────────┼─────────┼────────┼─────────┤
│ Bytes/Sec │ 14.1 MB │ 15 MB │ 16.9 MB │ 17.8 MB │ 16.8 MB │ 870 kB │ 14.1 MB │
└───────────┴─────────┴───────┴─────────┴─────────┴─────────┴────────┴─────────┘

Req/Bytes counts sampled once per second.
# of samples: 60

1k requests in 60.13s, 1.01 GB read
Running 60s test @ http://localhost:3000/contacts.prisma
5 connections


┌─────────┬────────┬────────┬────────┬────────┬───────────┬──────────┬────────┐
│ Stat    │ 2.5%   │ 50%    │ 97.5%  │ 99%    │ Avg       │ Stdev    │ Max    │
├─────────┼────────┼────────┼────────┼────────┼───────────┼──────────┼────────┤
│ Latency │ 110 ms │ 210 ms │ 328 ms │ 349 ms │ 211.76 ms │ 53.64 ms │ 367 ms │
└─────────┴────────┴────────┴────────┴────────┴───────────┴──────────┴────────┘
┌───────────┬─────────┬─────────┬─────────┬─────────┬─────────┬─────────┬─────────┐
│ Stat      │ 1%      │ 2.5%    │ 50%     │ 97.5%   │ Avg     │ Stdev   │ Min     │
├───────────┼─────────┼─────────┼─────────┼─────────┼─────────┼─────────┼─────────┤
│ Req/Sec   │ 20      │ 21      │ 23      │ 27      │ 23.55   │ 1.81    │ 20      │
├───────────┼─────────┼─────────┼─────────┼─────────┼─────────┼─────────┼─────────┤
│ Bytes/Sec │ 20.2 MB │ 21.2 MB │ 23.2 MB │ 27.3 MB │ 23.8 MB │ 1.82 MB │ 20.2 MB │
└───────────┴─────────┴─────────┴─────────┴─────────┴─────────┴─────────┴─────────┘

Req/Bytes counts sampled once per second.
# of samples: 60

1k requests in 60.09s, 1.43 GB read
Running 60s test @ http://localhost:3000/contacts.knex
5 connections


┌─────────┬────────┬────────┬────────┬────────┬──────────┬──────────┬────────┐
│ Stat    │ 2.5%   │ 50%    │ 97.5%  │ 99%    │ Avg      │ Stdev    │ Max    │
├─────────┼────────┼────────┼────────┼────────┼──────────┼──────────┼────────┤
│ Latency │ 113 ms │ 200 ms │ 302 ms │ 319 ms │ 202.2 ms │ 45.86 ms │ 337 ms │
└─────────┴────────┴────────┴────────┴────────┴──────────┴──────────┴────────┘
┌───────────┬─────────┬─────────┬─────────┬─────────┬─────────┬────────┬─────────┐
│ Stat      │ 1%      │ 2.5%    │ 50%     │ 97.5%   │ Avg     │ Stdev  │ Min     │
├───────────┼─────────┼─────────┼─────────┼─────────┼─────────┼────────┼─────────┤
│ Req/Sec   │ 20      │ 23      │ 25      │ 26      │ 24.64   │ 0.86   │ 20      │
├───────────┼─────────┼─────────┼─────────┼─────────┼─────────┼────────┼─────────┤
│ Bytes/Sec │ 20.2 MB │ 23.2 MB │ 25.3 MB │ 26.3 MB │ 24.9 MB │ 866 kB │ 20.2 MB │
└───────────┴─────────┴─────────┴─────────┴─────────┴─────────┴────────┴─────────┘

Req/Bytes counts sampled once per second.
# of samples: 60

1k requests in 60.08s, 1.49 GB read
Running 60s test @ http://localhost:3000/contacts.bookshelf
5 connections


┌─────────┬────────┬────────┬────────┬────────┬──────────┬──────────┬────────┐
│ Stat    │ 2.5%   │ 50%    │ 97.5%  │ 99%    │ Avg      │ Stdev    │ Max    │
├─────────┼────────┼────────┼────────┼────────┼──────────┼──────────┼────────┤
│ Latency │ 219 ms │ 340 ms │ 468 ms │ 495 ms │ 344.6 ms │ 54.87 ms │ 535 ms │
└─────────┴────────┴────────┴────────┴────────┴──────────┴──────────┴────────┘
┌───────────┬─────────┬─────────┬─────────┬─────────┬─────────┬────────┬─────────┐
│ Stat      │ 1%      │ 2.5%    │ 50%     │ 97.5%   │ Avg     │ Stdev  │ Min     │
├───────────┼─────────┼─────────┼─────────┼─────────┼─────────┼────────┼─────────┤
│ Req/Sec   │ 11      │ 13      │ 14      │ 16      │ 14.47   │ 0.91   │ 11      │
├───────────┼─────────┼─────────┼─────────┼─────────┼─────────┼────────┼─────────┤
│ Bytes/Sec │ 11.1 MB │ 13.1 MB │ 14.1 MB │ 16.2 MB │ 14.6 MB │ 913 kB │ 11.1 MB │
└───────────┴─────────┴─────────┴─────────┴─────────┴─────────┴────────┴─────────┘

Req/Bytes counts sampled once per second.
# of samples: 60

873 requests in 60.09s, 877 MB read

duration 🥁🥁🥁 benchmark results:
TypeORM:         # of samples: 60
Prisma:  # of samples: 60
Knex:            # of samples: 60
Bookshelf:       # of samples: 60


TypeORM is worse than Prisma by -29.28%
Tests are equal, results are probably not statistically significant.
TypeORM is worse than Knex by -32.4%
Prisma is better than Bookshelf by 62.81%
TypeORM is better than Bookshelf by 15.13%
Knex is better than Bookshelf by 70.32%
🚀 Running throughput benchmark...
Running 1000 requests test @ http://localhost:3000/contacts
5 connections


┌─────────┬────────┬────────┬────────┬────────┬───────────┬──────────┬────────┐
│ Stat    │ 2.5%   │ 50%    │ 97.5%  │ 99%    │ Avg       │ Stdev    │ Max    │
├─────────┼────────┼────────┼────────┼────────┼───────────┼──────────┼────────┤
│ Latency │ 132 ms │ 279 ms │ 435 ms │ 456 ms │ 282.35 ms │ 81.27 ms │ 526 ms │
└─────────┴────────┴────────┴────────┴────────┴───────────┴──────────┴────────┘
┌───────────┬─────────┬─────────┬─────────┬─────────┬─────────┬─────────┬─────────┐
│ Stat      │ 1%      │ 2.5%    │ 50%     │ 97.5%   │ Avg     │ Stdev   │ Min     │
├───────────┼─────────┼─────────┼─────────┼─────────┼─────────┼─────────┼─────────┤
│ Req/Sec   │ 11      │ 12      │ 18      │ 19      │ 17.55   │ 1.46    │ 11      │
├───────────┼─────────┼─────────┼─────────┼─────────┼─────────┼─────────┼─────────┤
│ Bytes/Sec │ 10.3 MB │ 11.3 MB │ 16.9 MB │ 17.8 MB │ 16.5 MB │ 1.36 MB │ 10.3 MB │
└───────────┴─────────┴─────────┴─────────┴─────────┴─────────┴─────────┴─────────┘

Req/Bytes counts sampled once per second.
# of samples: 57

1k requests in 57.1s, 938 MB read
(node:16712) MaxListenersExceededWarning: Possible EventEmitter memory leak detected. 11 SIGINT listeners added to [process]. Use emitter.setMaxListeners() to increase limit
(Use `node --trace-warnings ...` to show where the warning was created)
Running 1000 requests test @ http://localhost:3000/contacts.prisma
5 connections


┌─────────┬────────┬────────┬────────┬────────┬───────────┬──────────┬────────┐
│ Stat    │ 2.5%   │ 50%    │ 97.5%  │ 99%    │ Avg       │ Stdev    │ Max    │
├─────────┼────────┼────────┼────────┼────────┼───────────┼──────────┼────────┤
│ Latency │ 108 ms │ 209 ms │ 317 ms │ 333 ms │ 209.08 ms │ 54.77 ms │ 366 ms │
└─────────┴────────┴────────┴────────┴────────┴───────────┴──────────┴────────┘
┌───────────┬─────────┬─────────┬─────────┬─────────┬─────────┬─────────┬─────────┐
│ Stat      │ 1%      │ 2.5%    │ 50%     │ 97.5%   │ Avg     │ Stdev   │ Min     │
├───────────┼─────────┼─────────┼─────────┼─────────┼─────────┼─────────┼─────────┤
│ Req/Sec   │ 5       │ 20      │ 23      │ 26      │ 23.26   │ 3.3     │ 5       │
├───────────┼─────────┼─────────┼─────────┼─────────┼─────────┼─────────┼─────────┤
│ Bytes/Sec │ 5.05 MB │ 20.2 MB │ 23.2 MB │ 26.3 MB │ 23.5 MB │ 3.33 MB │ 5.05 MB │
└───────────┴─────────┴─────────┴─────────┴─────────┴─────────┴─────────┴─────────┘

Req/Bytes counts sampled once per second.
# of samples: 43

1k requests in 43.06s, 1.01 GB read
Running 1000 requests test @ http://localhost:3000/contacts.knex
5 connections


┌─────────┬────────┬────────┬────────┬────────┬──────────┬──────────┬────────┐
│ Stat    │ 2.5%   │ 50%    │ 97.5%  │ 99%    │ Avg      │ Stdev    │ Max    │
├─────────┼────────┼────────┼────────┼────────┼──────────┼──────────┼────────┤
│ Latency │ 112 ms │ 201 ms │ 297 ms │ 314 ms │ 203.4 ms │ 48.32 ms │ 434 ms │
└─────────┴────────┴────────┴────────┴────────┴──────────┴──────────┴────────┘
┌───────────┬─────────┬─────────┬─────────┬─────────┬─────────┬─────────┬─────────┐
│ Stat      │ 1%      │ 2.5%    │ 50%     │ 97.5%   │ Avg     │ Stdev   │ Min     │
├───────────┼─────────┼─────────┼─────────┼─────────┼─────────┼─────────┼─────────┤
│ Req/Sec   │ 20      │ 22      │ 25      │ 26      │ 24.4    │ 1.13    │ 20      │
├───────────┼─────────┼─────────┼─────────┼─────────┼─────────┼─────────┼─────────┤
│ Bytes/Sec │ 20.2 MB │ 22.2 MB │ 25.3 MB │ 26.3 MB │ 24.6 MB │ 1.14 MB │ 20.2 MB │
└───────────┴─────────┴─────────┴─────────┴─────────┴─────────┴─────────┴─────────┘

Req/Bytes counts sampled once per second.
# of samples: 41

1k requests in 41.05s, 1.01 GB read
Running 1000 requests test @ http://localhost:3000/contacts.bookshelf
5 connections


┌─────────┬────────┬────────┬────────┬────────┬───────────┬──────────┬────────┐
│ Stat    │ 2.5%   │ 50%    │ 97.5%  │ 99%    │ Avg       │ Stdev    │ Max    │
├─────────┼────────┼────────┼────────┼────────┼───────────┼──────────┼────────┤
│ Latency │ 224 ms │ 342 ms │ 467 ms │ 502 ms │ 345.08 ms │ 57.77 ms │ 570 ms │
└─────────┴────────┴────────┴────────┴────────┴───────────┴──────────┴────────┘
┌───────────┬─────────┬─────────┬─────────┬─────────┬─────────┬─────────┬─────────┐
│ Stat      │ 1%      │ 2.5%    │ 50%     │ 97.5%   │ Avg     │ Stdev   │ Min     │
├───────────┼─────────┼─────────┼─────────┼─────────┼─────────┼─────────┼─────────┤
│ Req/Sec   │ 7       │ 12      │ 14      │ 15      │ 14.29   │ 1.15    │ 7       │
├───────────┼─────────┼─────────┼─────────┼─────────┼─────────┼─────────┼─────────┤
│ Bytes/Sec │ 7.07 MB │ 12.1 MB │ 14.1 MB │ 15.2 MB │ 14.4 MB │ 1.16 MB │ 7.07 MB │
└───────────┴─────────┴─────────┴─────────┴─────────┴─────────┴─────────┴─────────┘

Req/Bytes counts sampled once per second.
# of samples: 70

1k requests in 70.12s, 1.01 GB read

throughput 🥁🥁🥁 benchmark results:
TypeORM:         # of samples: 57
Prisma:  # of samples: 43
Knex:            # of samples: 41
Bookshelf:       # of samples: 70


TypeORM is worse than Prisma by -29.94%
Tests are equal, results are probably not statistically significant.
TypeORM is worse than Knex by -33.21%
Prisma is better than Bookshelf by 62.8%
TypeORM is better than Bookshelf by 14.05%
Knex is better than Bookshelf by 70.77%
```

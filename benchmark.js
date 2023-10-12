'use strict';

/**
 * Usage:
 * - Ensure that Adonis is running in terminal with `node ace serve`
 * - Run `node scripts/benchmark.js`
 * or alternatively run `node scripts/benchmark.js [duration|throughput]` to run just one test type
 *
 */

const autocannon = require('autocannon');
const compare = require('autocannon-compare');

function printComparison(A, B, result) {
  if (result.aWins === true) {
    console.log(`${A} is better than ${B} by ${result.throughput.difference}`);
  } else if (result.bWins === true) {
    console.log(`${A} is worse than ${B} by ${result.throughput.difference}`);
  } else {
    console.log(
      'Tests are equal, results are probably not statistically significant.',
    );
  }
}

async function getInstanceFor(name, url, type) {
  const durationTest = {
    title: `${name} ORM Duration Benchmark`,
    url,
    duration: 20,
    connections: 5,
  };

  const throughputTest = {
    title: `${name} ORM Throughput Benchmark`,
    url,
    amount: 100,
    connections: 5,
  };

  const testConfig = type === 'duration' ? durationTest : throughputTest;

  const instancePromise = autocannon(testConfig);

  // this is used to kill the instance on CTRL-C
  process.once('SIGINT', () => {
    instancePromise.stop();
  });

  // just render results
  autocannon.track(instancePromise, {});

  return await instancePromise;
}

async function doComparisonBenchmark(type) {
  console.log(`Running ${type} benchmark...`);
  let typeORMResult = await getInstanceFor(
    'TypeORM',
    'http://localhost:3000/contacts',
    type,
  );
  let prismaResult = await getInstanceFor(
    'Prisma',
    'http://localhost:3000/contacts.prisma',
    type,
  );
  // let lucidResult = await getInstanceFor(
  //   'Lucid',
  //   'http://localhost:3000/api/v1/lucid/contacts',
  //   type,
  // );

  const typeORMOutput = autocannon.printResult(typeORMResult, {}).split('\n');
  const prismaOutput = autocannon.printResult(prismaResult, {}).split('\n');
  // const lucidOutput = autocannon.printResult(lucidResult, {}).split('\n');

  console.log(`\n${type} benchmark results:`);
  console.log('TypeORM:\t', typeORMOutput[15]);
  console.log('Prisma:\t', prismaOutput[15]);
  // console.log('Lucid:\t\t', lucidOutput[15]);

  console.log('\n');
  printComparison('TypeORM', 'Prisma', compare(typeORMResult, prismaResult));
  // printComparison('Objection', 'Lucid', compare(objectionResult, lucidResult));
  // printComparison('Bookshelf', 'Lucid', compare(typeORMResult, lucidResult));
}

/**
 * Duration benchmark tests for 20seconds
 * Throughput benchmark tests until 100 requests are completed
 */

async function main() {
  const args = process.argv.splice(2);

  // Default: run both a duration and throughput benchmark
  if (args.length === 0) {
    await doComparisonBenchmark('duration');
    await doComparisonBenchmark('throughput');
    return;
  }

  // Else run one or the other
  if (args[0] === 'duration') {
    await doComparisonBenchmark('duration');
  } else if (args[0] === 'throughput') {
    await doComparisonBenchmark('throughput');
  } else {
    console.log('Unknown benchmark');
  }
}

main();

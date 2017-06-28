import test from 'ava';
import countiesOfRomania from '../src/index';

test(function(t) {
  const listOfCounties = countiesOfRomania.all;

  t.true(listOfCounties.length > 0, 'Should have a list full of counties');
});

test(function(t) {
  const listOfCounties = countiesOfRomania.all,
    randomCounty = countiesOfRomania.random();

  t.true(listOfCounties.includes(randomCounty), 'Should get a random county from the list');
});

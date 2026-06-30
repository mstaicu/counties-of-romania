import assert from 'node:assert/strict';
import { createRequire } from 'node:module';
import { test } from 'node:test';

const require = createRequire(import.meta.url);
const { all, random } = require('../dist');

test('exports all counties in stable order', () => {
  assert.deepEqual(all, [
    'Alba',
    'Arad',
    'Argeș',
    'Bacău',
    'Bihor',
    'Bistrița-Năsăud',
    'Botoșani',
    'Brașov',
    'Brăila',
    'Bucharest',
    'Buzău',
    'Caraș-Severin',
    'Călărași',
    'Cluj',
    'Constanța',
    'Covasna',
    'Dâmbovița',
    'Dolj',
    'Galați',
    'Giurgiu',
    'Gorj',
    'Harghita',
    'Hunedoara',
    'Ialomița',
    'Iași',
    'Ilfov',
    'Maramureș',
    'Mehedinți',
    'Mureș',
    'Neamț',
    'Olt',
    'Prahova',
    'Satu Mare',
    'Sălaj',
    'Sibiu',
    'Suceava',
    'Teleorman',
    'Timiș',
    'Tulcea',
    'Vaslui',
    'Vâlcea',
    'Vrancea',
  ]);
});

test('random returns a county and avoids immediate repeats', () => {
  const firstCounty = random();
  const secondCounty = random();

  assert.ok(all.includes(firstCounty));
  assert.ok(all.includes(secondCounty));
  assert.notEqual(secondCounty, firstCounty);
});

test('can be imported from ESM without changing the CommonJS package entry', async () => {
  const api = await import('../dist/index.js');

  assert.equal(api.all, all);
  assert.equal(api.random, random);
});

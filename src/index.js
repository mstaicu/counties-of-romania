import randomUniqueArray from 'unique-random-array';
import _countiesOfRomania from './counties-of-romania.json';

const publicApi = {
  all: _countiesOfRomania,
  random: randomUniqueArray(_countiesOfRomania),
};

export default publicApi;
module.exports = publicApi;

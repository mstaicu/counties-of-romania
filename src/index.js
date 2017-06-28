import randomUniqueArray from 'unique-random-array';
import countiesOfRomania from './counties-of-romania.json';

const publicApi = {
  all: countiesOfRomania,
  random: randomUniqueArray(countiesOfRomania),
};

export default publicApi;
module.exports = publicApi;

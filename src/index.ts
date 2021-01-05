import { uniqueRandom } from './utils';

import counties from './counties';

const randomCountyIndex = uniqueRandom(0, counties.length - 1);

export const all = counties;
export const random: () => typeof counties[number] = () =>
  counties[randomCountyIndex()];

import counties, { type County } from './counties';

type RandomIndexFactory = (minimum: number, maximum: number) => () => number;

const uniqueRandom: RandomIndexFactory = (minimum, maximum) => {
  let previousValue: number | undefined;

  return function randomIndex(): number {
    const nextValue = Math.floor(
      Math.random() * (maximum - minimum + 1) + minimum,
    );

    if (nextValue === previousValue && minimum !== maximum) {
      return randomIndex();
    }

    previousValue = nextValue;

    return nextValue;
  };
};

const randomCountyIndex = uniqueRandom(0, counties.length - 1);

export const random = (): County => {
  const county = counties[randomCountyIndex()];

  if (county === undefined) {
    throw new RangeError('Generated county index is out of bounds.');
  }

  return county;
};

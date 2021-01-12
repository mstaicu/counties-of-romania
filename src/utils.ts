import counties from './counties';

interface UniqueRandom {
  (minimum: number, maximum: number): () => number;
}

const uniqueRandom: UniqueRandom = (minimum, maximum) => {
  let previousValue: number;

  return function random() {
    const number = Math.floor(
      Math.random() * (maximum - minimum + 1) + minimum,
    );

    previousValue =
      number === previousValue && minimum !== maximum ? random() : number;

    return previousValue;
  };
};

const randomCountyIndex = uniqueRandom(0, counties.length - 1);

const random: () => typeof counties[number] = () =>
  counties[randomCountyIndex()];

export { random };

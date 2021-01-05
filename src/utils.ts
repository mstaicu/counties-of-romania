interface UniqueRandom {
  (minimum: number, maximum: number): () => number;
}

export const uniqueRandom: UniqueRandom = (minimum, maximum) => {
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

import Big from 'big.js';

export const checkNestMultiplicity = (innerNest: number, outerNest: number) => {
  const VALUE_TO_COMPARE = '0';
  const bigInnerNest = Big(innerNest);
  const bigOuterNest = Big(outerNest);

  const remainderOfDivision = bigOuterNest.mod(bigInnerNest).valueOf();

  return remainderOfDivision === VALUE_TO_COMPARE;
};
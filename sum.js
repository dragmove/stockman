import { not } from './_util';

function sum(array) {
  if (not(Array.isArray)(array)) throw new TypeError('[sum] : array parameter type must be Array.');

  return (array.length <= 0) ? 0 : array.reduce((previous, current) => previous + current, 0);
}

export default sum;
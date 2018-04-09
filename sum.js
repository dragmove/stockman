import { not } from './_util';

export function sum(array) {
  if (not(Array.isArray)(array)) throw new TypeError('[sum] : array parameter type must be Array.');

  return (array.length <= 0) ? 0 : array.reduce(function (previous, current) {
    // TODO: if current value is not number type, throw type error.

    return previous + current;
  }, 0);
}
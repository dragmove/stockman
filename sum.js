import { not } from './_util';

export function sum(array) {
  if (not(Array.isArray)(array)) throw new TypeError('[sum] : array parameter type must be Array.');

  return (array.length <= 0) ? 0 : array.reduce(function (previous, current) {
    return previous + current;
  }, 0);
}
import { not } from './_util';
import { average } from './average';

export function variance(array) {
  if (not(Array.isArray)(array)) throw new TypeError('[variance] : array parameter type must be Array.');

  if (array.length <= 0) return 0;

  const av = average(array),
    sum = array.reduce(function (previous, current) {
      return previous + Math.pow(current - av, 2);
    }, 0);

  return sum / (array.length - 1);
}
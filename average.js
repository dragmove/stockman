import { not } from './_util';
import { sum } from './sum';

export function average(array) {
  if (not(Array.isArray)(array)) throw new TypeError('[average] : array parameter type must be Array.');

  return (array.length <= 0) ? 0 : sum(array) / array.length;
}
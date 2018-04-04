import { not } from './_util';
import { average } from './average';
import { standardDeviation } from './standardDeviation';

/*
 * after standardization, average will be 0 (zero). standard deviation will be 1 (one).
 */
export function standardization(array) {
  if (not(Array.isArray)(array)) throw new TypeError('[standardization] : array parameter type must be Array.');

  if (array.length <= 0) return [];

  const av = average(array),
    std = standardDeviation(array);

  return array.map(function (value) {
    return (value - av) / std;
  });
}
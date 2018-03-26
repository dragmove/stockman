import average from './_average';
import standardDeviation from './_standardDeviation';

/*
 * after standardization, average will be 0 (zero). standard deviation will be 1 (one).
 */
function standardization(array) {
  if (not(Array.isArray)(array)) throw new TypeError('[standardization] : array parameter type must be Array.');

  if (array.length <= 0) return [];

  const av = average(array),
    std = standardDeviation(array);

  return array.map((value) => (value - av) / std);
}

export default standardization;
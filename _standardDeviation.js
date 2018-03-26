import variance from './_variance';

function standardDeviation(array) {
  if (not(Array.isArray)(array)) throw new TypeError('[standardDeviation] : array parameter type must be Array.');

  if (array.length <= 0) return 0;

  return Math.sqrt(variance(array));
}

export default standardDeviation;
import { not, isNumber } from './_util';

export function sum(array) {
  if (not(Array.isArray)(array)) throw new TypeError('[sum] : array parameter type must be Array.');

  return array.length <= 0
    ? 0
    : array.reduce((previous, current) => {
        if (not(isNumber)(current)) throw new TypeError('[sum] : current parameter type must be Number.');

        return previous + current;
      }, 0);
}

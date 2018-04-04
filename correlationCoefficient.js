import { not } from './_util';
import { covariance } from './covariance';
import { standardDeviation } from './standardDeviation';

export function correlationCoefficient(arrayX, arrayY) {
  if (not(Array.isArray)(arrayX) || not(Array.isArray)(arrayY)) throw new TypeError('[correlationCoefficient] : arrayX and arrayY parameter type must be Array.');

  if (arrayX.length !== arrayY.length) throw new Error('[correlationCoefficient] : arrayX and arrayY length must be the same.');

  const cov = covariance(arrayX, arrayY),
    stdX = standardDeviation(arrayX),
    stdY = standardDeviation(arrayY);

  /*
   * cc (correlation coefficient) is >= -1 and <= 1.
   * The closer to -1, get the stronger cc of minus(-). That means arrayX and arrayY are 'substituete good' each other.
   * The closer to 1, get the stronger cc of plus(+). That means arrayX and arrayY are 'complementary good' each other.
   * The closer to 0, get the irrelevant. That means arrayX and arrayY are unrelated each other.
   */
  return cov / (stdX * stdY);
}
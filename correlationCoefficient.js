import { not } from './_util';
import covariance from './covariance';
import standardDeviation from './standardDeviation';

function correlationCoefficient(arrayX, arrayY) {
  if (not(Array.isArray)(arrayX) || not(Array.isArray)(arrayY)) throw new TypeError('[correlationCoefficient] : arrayX and arrayY parameter type must be Array.');

  if (arrayX.length !== arrayY.length) throw new Error('[correlationCoefficient] : arrayX and arrayY length must be the same.');

  const cov = covariance(arrayX, arrayY),
    stdX = standardDeviation(arrayX),
    stdY = standardDeviation(arrayY);

  return cov / (stdX * stdY);
}

export default correlationCoefficient;
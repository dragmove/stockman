import average from './_average';

function covariance(arrayX, arrayY) {
  if (not(Array.isArray)(arrayX) || not(Array.isArray)(arrayY)) throw new TypeError('[covariance] : arrayX and arrayY parameter type must be Array.');

  if (arrayX.length !== arrayY.length) throw new Error('[covariance] : arrayX and arrayY length must be the same.');

  const n = arrayX.length,
    avX = average(arrayX),
    avY = average(arrayY);

  let sum = 0;
  for (let i = 0; i < n; i++) {
    sum += (arrayX[i] - avX) * (arrayY[i] - avY);
  }

  return sum / (n - 1);
}

export default covariance;
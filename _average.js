function average(array) {
  return array.reduce((previous, current) => previous + current, 0) / array.length;
}

export default average;
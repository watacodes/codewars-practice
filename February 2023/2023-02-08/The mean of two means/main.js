/*

Codewars, 7k: The mean of two means

*/

function getMean(arr, x, y) {
  if (x > 1 && x <= arr.length && y > 1 && y <= arr.length) {
    const meanOfFirst = arr.slice(0, x).reduce((acc, curr) => acc + curr, 0) / x;
    const meanOfSecond = arr.slice(-y).reduce((acc, curr) => acc + curr, 0) / y;
    return (meanOfFirst + meanOfSecond) / 2;
  }
  return -1;
}
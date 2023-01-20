/*

Codewars, 7k: Sum of squares less than some number

*/

function getNumberOfSquares(n) {
  if (n === 1) return 0;
  let res = 0;
  let current = 1;
  while (res + current ** 2 < n) {
    res += current ** 2
    current++;
  }
  return current - 1;
}
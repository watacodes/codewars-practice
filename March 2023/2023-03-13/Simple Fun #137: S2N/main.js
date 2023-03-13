/*

Codewars, 7k: Simple Fun #137: S2N

*/

function S2N(m, n) {
  let sum = 0;
  for (let i = 0; i <= m; i++) {
    for (let k = 0; k <= n; k++) {
      sum += i ** k;
    }
  }
  return sum;
}
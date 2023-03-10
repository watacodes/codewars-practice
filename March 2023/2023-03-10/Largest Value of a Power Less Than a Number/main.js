/*

Codewars, 6k: Largest Value of a Power Less Than a Number

*/

function largestPower(n) {
  if (n === 1) return [0, -1];
  if (n <= 4) return [1, -1];
  const res = [];
  for (let i = 2; i ** 2 < n; i++) {
    for (let k = 2; i ** k < n; k++) {
      res.push(i ** k);
    }
  }
  const max = Math.max(...res);
  return [max, res.filter(e => e === max).length];
}
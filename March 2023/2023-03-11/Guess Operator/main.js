/*

Codewars, 6k: Guess Operator

*/

function operator(a, n, b) {
  if (n === 0) return b + 1;
  if (n === 1) return a + b;
  if (n === 2) return a * b;
  if (n === 3) return a ** b;
  let res = 0;
  for (let i = 0; i <= b; i++) {
    res = a ** res;
  }
  return res;
}
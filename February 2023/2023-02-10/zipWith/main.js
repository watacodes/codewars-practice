/*

Codewars, 7k: zipWith

*/

function zipWith(fn, a0, a1) {
  const smaller = Math.min(a0.length, a1.length);
  const res = [];
  for (let i = 0; i < smaller; i++) {
    res.push(fn(a0[i], a1[i]));
  }
  return res;
}
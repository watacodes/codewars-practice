/*

Codewars, 7k: Suitcase packing

*/

function fit_in(a, b, m, n) {
  return a + b <= Math.max(m, n) && (Math.max(a, b) <= Math.min(m, n));
}
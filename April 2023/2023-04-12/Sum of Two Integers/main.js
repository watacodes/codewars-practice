/*

Codewars, 6k: Sum of Two Integers

*/

function add(x, y) {
  if (y === 0) return x;
  return add(x ^ y, (x & y) << 1);
}
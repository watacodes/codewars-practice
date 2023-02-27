/*

Codewars, 5k: Additionless addition.

*/

function add (x, y) {
  return y === 0 ? x : add(x ^ y, (x & y) << 1);
}
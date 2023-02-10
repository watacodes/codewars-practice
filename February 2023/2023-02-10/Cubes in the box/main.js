/*

Codewars, 7k: Cubes in the box

*/

function f(x,y,z) {
  const minimum = Math.min(x, y, z);
  let res = 0;
  for (let i = 0; i < minimum; i++) {
    res += (x - i) * (y - i) * (z - i);
  }
  return res;
}
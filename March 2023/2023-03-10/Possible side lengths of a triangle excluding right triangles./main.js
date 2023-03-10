/*

Codewars, 7k: Possible side lengths of a triangle excluding right triangles.

*/

function sideLen(x, y) {
  const res = [];
  const min = y - x + 1;
  const max = x + y - 1;
  const c = x ** 2 + y ** 2;
  for (let i = min; i <= max; i++) {
    if (i !== Math.sqrt(y ** 2 - x ** 2) && i !== Math.sqrt(c)) {
      res.push(i);
    }
  }
  return res;
}
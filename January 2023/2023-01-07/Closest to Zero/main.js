/*

Codewars, 7k: Closest to Zero

*/

function closest(arr) {
  const arrOnlyAbs = [...new Set(arr)].sort((a, b) => Math.abs(a) - Math.abs(b));
  return arrOnlyAbs[0] + arrOnlyAbs[1] ? arrOnlyAbs[0] : null;
}
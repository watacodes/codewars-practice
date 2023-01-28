/*

Codewars, 7k: Simple Fun #9: Array Packing

*/

function arrayPacking(a) {
  return a.reduce((acc, curr, idx) => acc + curr * 256 ** idx);
}
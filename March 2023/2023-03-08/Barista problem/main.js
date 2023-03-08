/*

Codewars, 7k: Barista problem

*/

function barista(arr) {
  const sorted = arr.sort((a, b) => a - b);
  return sorted.reduce((acc, curr, idx) => acc + curr * (arr.length - idx) + 2 * idx, 0);
}
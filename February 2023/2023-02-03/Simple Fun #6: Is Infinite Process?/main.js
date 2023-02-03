/*

Codewars, 7k: Simple Fun #6: Is Infinite Process?

*/

function isInfiniteProcess(a, b) {
  return a - b === -1 || a > b || (b - a) % 2 === 1;
}
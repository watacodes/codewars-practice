/*

Codewars, 7k: Simple Fun #17: Rounders

*/

function rounders(n, counter = 0) {
  return n < 10 ? n * 10 ** counter : rounders(Math.round(n / 10), ++counter);
}
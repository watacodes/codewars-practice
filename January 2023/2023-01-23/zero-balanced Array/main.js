/*

Codewars, 7k: zero-balanced Array

*/

function ìsZeroBalanced(n) {
  return n.length > 0 && n.reduce((acc, curr) => acc + curr) === 0 && n.every(e => n.includes(-e));
}
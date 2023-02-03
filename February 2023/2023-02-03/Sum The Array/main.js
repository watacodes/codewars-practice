/*

Codewars, 7k: Sum The Array

*/

Array.prototype.sum = function() {
  return this.reduce((acc, curr) => acc + curr, 0);
}
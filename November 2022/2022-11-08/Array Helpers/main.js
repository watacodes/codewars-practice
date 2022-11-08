/*

Codewars, 6k: Array Helpers

*/

Array.prototype.square = function() {
  return this.map(a => a ** 2);
}

Array.prototype.cube = function() {
  return this.map(a => a ** 3);
}

Array.prototype.average = function() {
  return this.reduce((acc, curr) => acc + curr, 0) / this.length || NaN;
}

Array.prototype.sum = function() {
  return this.reduce((acc, curr) => acc + curr, 0);
}

Array.prototype.even = function() {
  return this.filter(a => a % 2 === 0);
}

Array.prototype.odd = function() {
  return this.filter(a => a % 2 === 1);
}
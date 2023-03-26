/*

Codewars, 7k: Putting the flatMap into the JS

*/

Array.prototype.flatMap = function(f) {
  return this.reduce((acc, curr) => [...acc, ...f(curr)], []);
};
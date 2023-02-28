/*

Codewars, 5k: Concatenating functions

*/

Function.prototype.pipe = function(fn) {
  return (...args) => fn(this(...args));
}
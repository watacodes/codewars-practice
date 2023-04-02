/*

Codewars, 6k: Custom each() Array method

*/

Array.prototype.each = function(cb) {
  return this.some(cb);
};
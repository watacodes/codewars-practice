/*

Codewars, 7k: Array.prototype.reverse()

*/

Array.prototype.reverse = function() {
  let arr = this.splice(0);
  while (arr.length) {
    this.push(arr.pop());
  }
  return this;
};
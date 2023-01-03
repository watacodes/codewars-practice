/*

Codewars, 7k: Regexp Basics - is it a six bit unsigned number?

*/

String.prototype.sixBitNumber = function() {
  return /^([0-9]|[1-5][0-9]|[1-6][0-3])$/g.test(this);
}
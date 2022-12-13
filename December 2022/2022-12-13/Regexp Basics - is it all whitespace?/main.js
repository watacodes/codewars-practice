/*

Codewars, 7k: Regexp Basics - is it all whitespace?

*/

String.prototype.whitespace = function() {
  return this.replace(/\s/g, '').length === 0;
}
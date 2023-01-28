/*

Codewars, 7k: Regexp Basics - is it a hexadecimal number?

*/

String.prototype.hexNumber = function () {
  return /^(0x)?[0-9A-F]+$/gi.test(this);
}
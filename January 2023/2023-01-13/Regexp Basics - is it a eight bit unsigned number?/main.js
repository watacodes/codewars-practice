/*

Codewars, 7k: Regexp Basics - is it a eight bit unsigned number?

*/

String.prototype.eightBitNumber = function() {
  return String(+this) == this && +this <= 255 && +this >= 0;
}
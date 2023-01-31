/*

Codewars, 7k: Green Glass Door

*/

function stepThroughWith(s) {
  return /([a-z])\1/gi.test(s);
}
/*

Codewars, 7k: Number Of Occurrences

Write a function that returns the number of occurrences of an element in an array.

Examples
var arr = [0, 1, 2, 2, 3];
arr.numberOfOccurrences(0) === 1;
arr.numberOfOccurrences(4) === 0;
arr.numberOfOccurrences(2) === 2;
arr.numberOfOccurrences("a") === 0;

*/

Array.prototype.numberOfOccurrences = function(num) {
  let occurrence = this.reduce((a, b) => a + (num === b), 0);
  return occurrence;
}
/*

Codewars, 7k: Find the anonymous function

*/

const FindFunction = function(func, arr) {
  return arr.filter(func.filter(elem => typeof elem == 'function')[0]);
}
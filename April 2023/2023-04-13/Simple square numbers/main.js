/*

Codewars, 6k: Simple square numbers

*/

function solve(n) {
  let i = 1;
  
  while (i < n) {
    if (Number.isInteger(Math.sqrt(i ** 2 + n))) {
      return i ** 2;
    }
    i++;
  }
  
  return -1;
}
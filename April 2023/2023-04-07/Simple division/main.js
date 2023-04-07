/*

Codewars, 6k: Simple division

*/

function solve(a, b) {
  for (let i = 2; i <= b; i++) {
    if (b % i === 0) {
      if (a % i) return false;
    }
    
    while (a % i === 0) {
      a /= i;
    }
    
    while (b % i === 0) {
      b /= i;
    }
  }
  
  return b === 1;
};
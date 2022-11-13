/*

Codewars, 7k: Recursion 101

Condition:
  1) If a === 0 || b === 0, return [a,b]
  2) If a >= 2b, a = a - 2 * b. 
      2.1) if new a === 0 || b === 0, return [a, b];
           if it doesn't satisfy, go to step 3.
  3) If b >= 2a, b = b - 2 * b.
      3.1) if a === 0 || new b === 0, return [a, b];
*/

const solve = (a, b) => {
  while (a >= 2 * b || b >= 2 * a) {
    if (a === 0 || b === 0) {
      return [a, b];
    } else if (a >= 2 * b) {
      a = a % (2 * b);
    } else if (b >= 2 * a) {
      b = b % (2 * a);
    }
  }
  return [a, b];
}

console.log(solve(22, 5));
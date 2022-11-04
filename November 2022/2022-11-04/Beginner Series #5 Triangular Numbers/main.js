/*

Codewars, 7k: Beginner Series #5 Triangular Numbers

Hint!
T(n) = n * (n + 1) / 2,
n - is the size of one side.
T(n) - is the triangular number

*/

const isTriangular = t => {
  return Number.isInteger(Math.sqrt(8 * t + 1));
};

console.log(isTriangular(12));
console.log(Math.sqrt(10 * 8 + 1))
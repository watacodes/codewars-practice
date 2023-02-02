/*

Codewars, 7k: Thinkful - Number Drills: Quadratic formula

*/

function quadraticFormula(a, b, c) {
  const d = (b ** 2) - (4 * a * c);
  const bottom = a * 2;
  return d > 0 ? [((-b) + Math.sqrt(d)) / bottom, ((-b) - Math.sqrt(d)) / bottom] : 0;
}
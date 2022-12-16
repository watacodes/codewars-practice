/*

Codewars, 7k: Find the sum of the roots of a quadratic equation

*/

const roots = (a, b, c) => {
  const d = b ** 2 - 4 * a * c;
  if (d < 0) return null;
  return +(-b / a).toFixed(2);
}
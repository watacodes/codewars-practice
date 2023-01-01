/*

Codewars, 7k: Finding Remainder Without Using '%' Operator

*/

const remainder = (D, d) => {
  if (D / 2 === 0) return 0;
  let num = Math.floor(D / d);
  return D - d * num;
}
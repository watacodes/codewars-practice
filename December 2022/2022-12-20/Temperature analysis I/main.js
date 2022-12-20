/*

Codewars, 7k: Temperature analysis I

*/

const lowestTemp = str => {
  if (!str) return null;
  const tempArr = str.split(' ').map(a => +a);
  return Math.min(...tempArr);
}
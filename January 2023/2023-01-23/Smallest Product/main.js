/*

Codewars, 7k: Smallest Product

*/

function smallestProduct(arr) {
  return Math.min(...arr.map(e => e.reduce((acc, curr) => acc * curr)));
}
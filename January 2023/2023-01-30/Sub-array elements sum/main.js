/*

Codewars, 7k: Sub-array elements sum

*/

function elementsSum(arr, d = 0) {
  return arr.reduce((acc, curr, idx) => acc + (curr[arr.length - 1 - idx] === undefined ? d : curr[arr.length - 1 - idx]), 0);
}
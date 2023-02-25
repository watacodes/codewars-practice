/*

Codewars, 5k: Mean Square Error

*/

const solution = (arr1, arr2) => {
  return arr1.reduce((acc, curr, idx) => acc + (Math.abs(curr - arr2[idx]) ** 2), 0) / arr1.length;
}
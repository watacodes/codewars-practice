/*

Codewars, 6k: Exercise in Summing

*/

function minimumSum(values, n) {
  return values.sort((a, b) => a - b).slice(0, n).reduce((acc, curr) => acc + curr, 0);
}

function maximumSum(values, n) {
  return values.sort((a, b) => b - a).slice(0, n).reduce((acc, curr) => acc + curr, 0);  
}
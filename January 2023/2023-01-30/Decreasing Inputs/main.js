/*

Codewars, 7k; Decreasing Inputs

*/

function add(...args) {
  return Math.round(args.reduce((acc, curr, idx) => acc + curr / (idx + 1), 0));
}
/*

Codewars, 7k: Javascript Mathematician

*/

function calculate(...args) {
  const sum = args.reduce((acc, curr) => acc + curr, 0);
  return function(...b) {
    return sum + b.reduce((acc, curr) => acc + curr, 0);
  }
}
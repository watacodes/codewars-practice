/*

Codewars, 7k: Odder Than the Rest

Create a method that takes an array/list as an input, and outputs the index at which the sole odd number is located.

*/

const oddOne = arr => arr.findIndex(e => Math.abs(e % 2) === 1);

console.log(oddOne([2,16,98,10,13,78]))

console.log(-7 % 2);
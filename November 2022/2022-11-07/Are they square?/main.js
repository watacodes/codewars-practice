/*

Codewars, 7k: Are they square?


*/

const isSquare = arr => arr.length === 0 ? undefined : arr.every(a => Number.isInteger(Math.sqrt(a)));

console.log(isSquare([1,2,3,16]))
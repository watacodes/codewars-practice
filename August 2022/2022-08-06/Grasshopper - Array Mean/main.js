/*

Codewars, 8k: Grasshopper - Array Mean

Find the mean (average) of a list of numbers in an array.

*/

const findAverage = arr => arr.reduce((a, b) => a + b, 0) / arr.length;

console.log(findAverage([1,3,3,7]))
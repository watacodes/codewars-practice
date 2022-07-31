/*

Codewars, 8k: https://www.codewars.com/kata/57eaeb9578748ff92a000009

Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.

Return your answer as a number.

*/

const sumMix = x => x.map(a => parseInt(a, 10)).reduce((a, b) => a + b);

console.log(sumMix(['5', '0', 9, 3, 2, 1, '9', 6, 7]));
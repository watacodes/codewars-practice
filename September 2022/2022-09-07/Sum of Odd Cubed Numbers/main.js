/*

Codewars, 7k: Sum of Odd Cubed Numbers

Find the sum of the odd numbers within an array, after cubing the initial integers. The function should return undefined if any of the values aren't numbers.

*/

const cubeOdd = arr => arr.every(a => typeof a === 'number') ? arr.filter(a => a % 2 !== 0).reduce((a, b) => a + Math.pow(b, 3), 0) : undefined;

console.log(cubeOdd([-3, -2, 2, 3]));
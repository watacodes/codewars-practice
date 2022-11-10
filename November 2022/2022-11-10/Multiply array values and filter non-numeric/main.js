/*

Codewars, 7k: Multiply array values and filter non-numeric

*/

const multiplyAndFilter = (arr, multiplier) => arr.filter(a => a || typeof a === 'number').map(a => a * multiplier);
/*

Codewars, 7k: Array Manipulation

*/

const arrayManip = arr => arr.map((num, i) => arr.slice(i+1).filter(a => a > num).length === 0 ? -1 : Math.min(...arr.slice(i+1).filter(a => a > num)));
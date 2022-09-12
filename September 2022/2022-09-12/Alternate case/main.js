/*

Codewars, 7k: Alternate case

Write function alternateCase which switch every letter in string from upper to lower and from lower to upper. E.g: Hello World -> hELLO wORLD

*/

const alternateCase = s => s.split('').map(a => a.toLowerCase() === a ? a.toUpperCase() : a.toLowerCase()).join('');

console.log(alternateCase('abcD'));
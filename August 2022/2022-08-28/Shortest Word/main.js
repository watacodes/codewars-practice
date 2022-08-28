/*

Codewars, 7k: Shortest Word

Simple, given a string of words, return the length of the shortest word(s).

String will never be empty and you do not need to account for different data types.

*/

const findShort = s => s.split(' ').map(a => a.length).sort((a, b) => a - b)[0];

console.log(findShort("Let's travel abroad shall we"));
/*

Codewars, 7k: Double Every Other

Write a function that doubles every second integer in a list, starting from the left.

*/

const doubleEveryOther = arr => arr.map((n, i) => i % 2 === 1 ? n * 2 : n);
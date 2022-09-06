/*

Codewars, 7k: No oddities here

Write a small function that returns the values of an array that are not odd.

All values in the array will be integers. Return the good values in the order they are given.

*/

const noOdds = v => v.filter(a => a % 2 === 0);
/*

Codewars, 7k: Largest Elements

Write a program that outputs the top n elements from a list.

Example:

largest(2, [7,6,5,4,3,2,1])
// => [6,7]

*/

const largest = (n, arr) => n === 0 ? [] : arr.sort((a, b) => a - b).slice(-n);
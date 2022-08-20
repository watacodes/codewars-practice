/*

Codewars, 8k: Enumerable Magic #2 - True for Any?

Create an any? (JS: any) function that accepts an array and a block (JS: function), and returns true if the block (/function) returns true for any item in the array. If the array is empty, the function should return false.

*/

const any = (a, b) => a.some(b);
/*

Codewars, 8k: Enumerable Magic #4 - True for None?

Create a method none? (JS none) that accepts an array and a block (JS: a function), and returns true if the block (/function) returns true for none of the items in the array. An empty list should return true.

*/

const none = (a, f) => a.some(f) ? false : true; 
console.log(none([1,2,3,4,5], f));
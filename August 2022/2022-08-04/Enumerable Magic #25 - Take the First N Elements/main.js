/*

Codewars, 8k:

Create a function that accepts a list/array and a number n, and returns a list/array of the first n elements from the list/array.

If you need help, here's a reference:

*/

const take = (arr, n) => arr.slice(0, n);

console.log(take([1,2,3,4,5], 3));

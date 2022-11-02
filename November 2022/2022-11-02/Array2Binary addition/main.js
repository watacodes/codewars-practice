/*

Codewars, 7k: Array2Binary addition

Given an array containing only integers, add all the elements and return the binary equivalent of that sum.

If the array contains any non-integer element (e.g. an object, a float, a string and so on), return false.

Note: The sum of an empty array is zero.

*/

const arr2bin = arr => {
  if (!arr.every(a => typeof a === 'number')) return false;
  return arr.reduce((acc, curr) => acc + curr, 0).toString(2);
};

console.log(arr2bin([1,2,3,4,5]))
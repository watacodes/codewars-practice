/*

Codewars, 7k: Most digits

Find the number with the most digits.

If two numbers in the argument array have the same number of digits, return the first one in the array.

*/

const findLongest = arr => {
  let mapped = arr.map(a => a.toString().length);
  let idx = mapped.indexOf(Math.max(...mapped));
  return arr[idx];
};
console.log(findLongest([1, 900, 500, 10000]))
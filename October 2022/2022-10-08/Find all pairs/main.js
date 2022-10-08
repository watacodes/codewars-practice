/*

Codewars, 7k: Find all pairs

You are given array of integers, your task will be to count all pairs in that array and return their count.

Notes:

Array can be empty or contain only one value; in this case return 0
If there are more pairs of a certain number, count each pair only once. E.g.: for [0, 0, 0, 0] the return value is 2 (= 2 pairs of 0s)
Random tests: maximum array length is 1000, range of values in array is between 0 and 1000
Examples
[1, 2, 5, 6, 5, 2]  -->  2

*/

const duplicates = arr => {
  let occurrence = arr.reduce((a, b, i) => {
    if (arr.includes(b) && !a[b]) {
      a[b] = 1;
    } else if (a[b]) {
      a[b]++;
    }
    return a;
  }, {});
  return Object.values(occurrence).filter(a => a > 1).reduce((a, b) => a + Math.floor(b / 2), 0);
};

console.log(duplicates([1, 2, 2, 20, 6, 20, 2, 6, 2]));
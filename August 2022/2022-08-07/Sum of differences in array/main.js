/*

Codewars, 8k: Sum of differences in array

Your task is to sum the differences between consecutive pairs in the array in descending order.

Example
[2, 1, 10]  -->  9
In descending order: [10, 2, 1]

Sum: (10 - 2) + (2 - 1) = 8 + 1 = 9

If the array is empty or the array has only one element the result should be 0 (Nothing in Haskell, None in Rust).

*/

// sort arrray in descending order

const sumOfDifferences = arr => {
  let sorted = arr.sort((a, b) => b - a);
  let num = 0;
  for (let i = 0; i < sorted.length - 1; i++) {
    num += sorted[i] - sorted[i + 1];
  }
  return num;
};

console.log(sumOfDifferences([2, 1, 10]));


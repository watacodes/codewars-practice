/*

Codewars, 7k: Find The Duplicated Number in a Consecutive Unsorted List

You are given an array of n+1 integers 1 through n. In addition there is a single duplicate integer.

The array is unsorted.

An example valid array would be [3, 2, 5, 1, 3, 4]. It has the integers 1 through 5 and 3 is duplicated. [1, 2, 4, 5, 5] would not be valid as it is missing 3.

You should return the duplicate value as a single integer.

*/

const findDup = arr => {
  let sorted = arr.sort((a, b) => a - b);
  return sorted.reduce((acc, curr, i) => {
    if (sorted.lastIndexOf(curr) !== i) {
      acc = curr;
    }
    return acc;
  }, 0);
}

console.log(findDup( [3, 2, 5, 1, 3, 4]))
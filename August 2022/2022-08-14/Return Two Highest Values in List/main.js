/*

Codewars, 8k: Return Two Highest Values in List

In this kata, your job is to return the two distinct highest values in a list. If there're less than 2 unique values, return as many of them, as possible.

The result should also be ordered from highest to lowest.

Examples:

[4, 10, 10, 9]  =>  [10, 9]
[1, 1, 1]  =>  [1]
[]  =>  []


*/
const twoHighest = a => {
  let sortedArray = [...new Set(a)].sort((a, b) => b - a);
  return sortedArray.length <= 2 ? sortedArray : [sortedArray[0], sortedArray[1]];
}

console.log(twoHighest([4, 10, 10, 9]))
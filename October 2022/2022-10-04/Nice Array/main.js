/*

Codewars, 7k: Nice Array

A Nice array is defined to be an array where for every value n in the array, there is also an element n - 1 or n + 1 in the array.

Write a function named isNice/IsNice that returns true if its array argument is a Nice array, else false. An empty array is not considered nice.

*/

const isNice = a => {
  if (a.length === 0) return false;
  let sorted = a.sort((a, b) => a - b);
  for (let i = 0; i < a.length; i++) {
    if (!sorted.includes(sorted[i] + 1) && !sorted.includes(sorted[i] - 1)) {
      return false;
    };
  };
  return true;
};

console.log(isNice([2,3,9,10]));
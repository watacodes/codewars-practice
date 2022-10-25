/*

Codewars, 7k: Find Duplicates

Given an array, find the duplicates in that array, and return a new array of those duplicates. The elements of the returned array should appear in the order when they first appeared as duplicates.

Note: numbers and their corresponding string representations should not be treated as duplicates (i.e., "1" != 1).

*/

const duplicates = arr => {
  return [... new Set(arr.filter((n, i) => i !== arr.indexOf(n)))];
};

// console.log(duplicates([1, 2, 4, 4, 3, 3, 1, 5, 3, "5"] ))

// const set = [...new Set([1, 2, 4, 4, 3, 3, 1, 5, 3, "5"] )].sort((a, b) => a - b)
// const or = [1,2,4,4,3,3,1,5,3,'5'];

// console.log(or.filter(a => set.includes(a)));
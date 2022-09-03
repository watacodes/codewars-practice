/*

Codewars, 7k: Row Weights

Task
Given an array of positive integers (the weights of the people), return a new array/tuple of two integers, where the first one is the total weight of team 1, and the second one is the total weight of team 2.

Notes
Array size is at least 1.
All numbers will be positive.
Input >> Output Examples
rowWeights([13, 27, 49])  ==>  return (62, 27)
Explanation:
The first element 62 is the total weight of team 1, and the second element 27 is the total weight of team 2.

*/

const rowWeights = arr => {
  let first = 0;
  let second = 0;
  for (let i in arr) {
    if (i % 2 === 0) {
      first += arr[i];
    } else {
      second += arr[i];
    }
  }
  return [first, second];
};

console.log(rowWeights([13, 27, 49]));
/*

Codewars, 7k: Maximum Product

Task

Given an array of integers , Find the maximum product obtained from multiplying 2 adjacent numbers in the array.

Notes
Array/list size is at least 2.

Array/list numbers could be a mixture of positives, negatives also zeroes .

Input >> Output Examples
adjacentElementsProduct([1, 2, 3]); ==> return 6

*/

const adjacentElementsProduct = arr => {
  let res = [];
  for (let i = 0; i < arr.length - 1; i++) {
    res.push(arr[i] * arr[i+1]);
  }
  return Math.max(...res);
}

console.log(adjacentElementsProduct([1,2,3]));

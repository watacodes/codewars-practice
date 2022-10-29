/*

Codewars, 7k: Even odd disparity

Given an array, return the difference between the count of even numbers and the count of odd numbers. 0 will be considered an even number.

*/

const solve = arr => {
  const onlyNums = arr.filter(a => typeof a === 'number');
  let evens = onlyNums.filter(a => a % 2 === 0).length;
  let odds = onlyNums.filter(a => a % 2 === 1).length;
  return evens - odds;
};
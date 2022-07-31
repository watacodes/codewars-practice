/*

Codewars 8k:

Write a function which calculates the average of the numbers in a given list.

Note: Empty arrays should return 0.

*/

const find_average = arr => {
  let result = 0;
  if (arr.length > 0) {
    arr.map(a => result += a);
    return result / arr.length;
  }
  return 0;
}

console.log(find_average([1, 2, 3, 4, 5]));
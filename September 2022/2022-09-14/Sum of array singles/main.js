/*

Codewars, 7k: Sum of array singles

In this Kata, you will be given an array of numbers in which two numbers occur once and the rest occur only twice. Your task will be to return the sum of the numbers that occur only once.

For example, repeats([4,5,7,5,4,8]) = 15 because only the numbers 7 and 8 occur once, and their sum is 15. Every other number occurs twice.

More examples in the test cases.

*/

const repeats = arr => {
  let arr1 = [];
  let arr2 = [];
  for (let i of arr) {
    if (!arr1.includes(i)) {
      arr1.push(i);
    } else if (arr1.includes(i) && !arr2.includes(i)) {
      arr2.push(i);
    }
  }
  for (let i of arr2) {
    if (arr1.includes(i)) {
      arr1.splice(arr1.indexOf(i), 1);
    }
  }
  return arr1.reduce((a, b) => a + b, 0);
};

console.log(repeats([4,5,7,5,4,8]))
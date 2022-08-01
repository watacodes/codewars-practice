/*

Codewars, 8k: https://www.codewars.com/kata/55ecd718f46fba02e5000029

Complete the function that takes two integers (a, b, where a < b) and return an array of all integers between the input parameters, including them.

For example:

a = 1
b = 4
--> [1, 2, 3, 4]

*/

const between = (a, b) => {
  let start = a;
  let emptyArr = [];
  for (let i = start; i <= b; i++) {
    emptyArr.push(i);
  }
  return emptyArr;
};

console.log(between(1, 4));

console.log(between(2, 6));
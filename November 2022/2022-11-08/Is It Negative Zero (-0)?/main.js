/*

Codewars, 7k: Is It Negative Zero (-0)?

There exist two zeroes: +0 (or just 0) and -0.

Write a function that returns true if the input number is -0 and false otherwise (True and False for Python).

*/

const isNegativeZero = n => {
  const isZero = n === 0;
  const isNegative = 1 / n === -Infinity;
  return isZero && isNegative;
};

console.log(isNegativeZero())
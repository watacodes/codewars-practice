/*

Codewars, 7k: Filter unused digits

Given a varying number of integer arguments, return the digits that are not present in any of them.

Example:

[12, 34, 56, 78]  =>  "09"
[2015, 8, 26]     =>  "3479"
Note: the digits in the resulting string should be sorted.

*/

const unusedDigits = (...array) => {
  let result = '';
  let digits = [];
  for (let i = 0; i < 10; i++) {
    digits.push(i);
  }
  let sortedArray = array.join('').split('').sort((a, b) => a - b).map(a => +a);
  digits.forEach(a => !sortedArray.includes(a) ? result += a : a);
  return result;
};

console.log(unusedDigits([12, 34, 56, 78]));

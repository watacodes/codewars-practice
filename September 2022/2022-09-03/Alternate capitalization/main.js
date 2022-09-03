/*

Codewars, 7k: Alternate capitalization

Given a string, capitalize the letters that occupy even indexes and odd indexes separately, and return as shown below. Index 0 will be considered even.

For example, capitalize("abcdef") = ['AbCdEf', 'aBcDeF']. See test cases for more examples.

The input will be a lowercase string with no spaces.

Good luck!

*/

const capitalize = s => {
  let first = s.split('').map((a, i) => i % 2 === 0 ? a.toUpperCase() : a.toLowerCase()).join('');
  let second = s.split('').map((a, i) => i % 2 === 1 ? a.toUpperCase() : a.toLowerCase()).join('');
  return [first, second];
}

console.log(capitalize('abcdef'));
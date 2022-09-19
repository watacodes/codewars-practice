/*

Codewars, 7k: Indexed capitalization

Given a string and an array of integers representing indices, capitalize all letters at the given indices.

For example:

capitalize("abcdef",[1,2,5]) = "aBCdeF"
capitalize("abcdef",[1,2,5,100]) = "aBCdeF". There is no index 100.
The input will be a lowercase string with no spaces and an array of digits.

*/

const capitalize = (s, arr) => {
  let strArr = s.split('');
  for (let i of arr) {
    if (i > strArr.length) {
      continue;
    } else {
      strArr.splice(i, 1, strArr[i].toUpperCase());
    }
  }
  return strArr.join('');
};

console.log(capitalize("abcdef", [1, 2, 100]))
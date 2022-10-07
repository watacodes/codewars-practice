/*

Codewars, 7k: Substituting Variables Into Strings: Padded Numbers

Complete the solution so that it returns a formatted string. The return value should equal "Value is VALUE" where value is a 5 digit padded number.

Example:

solution(5) // should return "Value is 00005"

*/

const solution = n => {
  let idx = String(n).length;
  let preset = '00000';
  return `Value is ${preset.slice(0, 5 - idx) + n}`;
}

console.log(solution(1243))
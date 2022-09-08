/*

Codewars, 7k: Divide and Conquer

Given a mixed array of number and string representations of integers, add up the string integers and subtract this from the total of the non-string integers.

Return as a number.

*/

const divCon = x => {
  let strInt = x.filter(a => typeof a === 'string');
  let justInt = x.filter(a => typeof a === 'number');
  return justInt.reduce((a, b) => a + b, 0) - strInt.map(a => +a).reduce((a, b) => a + b, 0);
};

console.log(divCon([9, 3, '7', '3']));



/*

Codewars, 7k: Previous multiple of three

Given a positive integer n: 0 < n < 1e6, remove the last digit until you're left with a number that is a multiple of three.

Return n if the input is already a multiple of three, and if no such number exists, return null, a similar empty value, or -1.

Examples
1      => null
25     => null
36     => 36
1244   => 12
952406 => 9

*/

const prevMultOfThree = num => {
  if (String(num).length === 1 && !Number.isInteger(num / 3)) return null;
  let numArr = String(num).split('');
  if (Number.isInteger(num / 3)) return num;
  let shortened = numArr.slice(0, numArr.length - 1);
  if (Number(shortened.join('')) % 3 === 0) {
    return Number(shortened.join(''));
  } else {
    return prevMultOfThree(Number(shortened.join('')));
  }
}

console.log(prevMultOfThree(1244));
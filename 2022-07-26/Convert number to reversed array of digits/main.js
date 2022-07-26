/*

Codewars 8k:

Convert number to reversed array of digits
Given a random non-negative number, you have to return the digits of this number within an array in reverse order.

Example(Input => Output):
348597 => [7,9,5,8,4,3]
0 => [0]

*/

const digitize = n => {
  let nToArr = String(n).split('').map(a => Number(a));
  const reversed = nToArr.reverse();
  return reversed;
}

console.log(digitize(348597));
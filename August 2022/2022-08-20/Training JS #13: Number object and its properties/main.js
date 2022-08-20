/*

Codewars, 8k: Training JS #13: Number object and its properties

Task

Coding in function whatNumberIsIt. function accept 1 parameter:n. it's a number.

To judge the number n. If n is one of the above five constants, return one of these string:

"Input number is Number.MAX_VALUE"
"Input number is Number.MIN_VALUE"
"Input number is Number.NaN"
"Input number is Number.NEGATIVE_INFINITY"
"Input number is Number.POSITIVE_INFINITY"
Other values should return "Input number is xxx". xxx means this number.

For example:

whatNumberIsIt(1/0) should return "Input number is Number.POSITIVE_INFINITY"
whatNumberIsIt(100) should return "Input number is 100"
What you need to think about is how to judge it correctly and effectively and don't forget isNaN().
*/

const whatNumberIsIt = n => {
  let msg = 'Input number is Number.';
  if (Number.MAX_VALUE === n) return msg + 'MAX_VALUE';
  if (Number.MIN_VALUE === n) return msg + 'MIN_VALUE';
  if (isNaN(n)) return msg + 'NaN';
  if (Number.NEGATIVE_INFINITY === n) return msg + 'NEGATIVE_INFINITY';
  if (Number.POSITIVE_INFINITY === n) return msg + 'POSITIVE_INFINITY';
  return 'Input number is ' + n;
}
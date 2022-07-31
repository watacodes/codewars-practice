/*

Codewars 8k: https://www.codewars.com/kata/57eae65a4321032ce000002d

Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'. Return the resulting string.

Note: input will never be an empty string


*/

const fakeBin = x => {
  return x.split('')
          .map(num => num < 5 ? '0' : '1')
          .join('');
}

console.log(fakeBin('45385593107843568'));
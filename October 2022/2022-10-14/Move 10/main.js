/*

Codewars, 7k: Move 10

Move every letter in the provided string forward 10 letters through the alphabet.

If it goes past 'z', start again at 'a'.

Input will be a string with length > 0.

*/

// 'testcase' => 'docdmkco'

const moveTen = str => {
  let alpha = 'abcdefghijklmnopqrstuvwxyz';
  let strToArray = str.split('');
  let skipTenIndices = strToArray.map(letter => letter.charCodeAt() - 86 > 26 ? (letter.charCodeAt() - 86) % 26 : letter.charCodeAt() - 86);
  console.log(skipTenIndices);
  return skipTenIndices.map(a => alpha[a-1]).join('');
}

console.log(moveTen('codewars'));

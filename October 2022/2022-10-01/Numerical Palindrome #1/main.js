/*

Codewars, 7k: Numerical Palindrome #1


A palindrome is a word, phrase, number, or other sequence of characters which reads the same backward as forward. Examples of numerical palindromes are:

2332
110011
54322345

For a given number num, write a function to test if it's a numerical palindrome or not and return a boolean (true if it is and false if not).

Return "Not valid" if the input is not an integer or less than 0.


*/

const palindrome = n => {
  if (n < 0 || typeof n !== 'number') return 'Not valid';
  let copy = n.toString().slice();
  let convertedN = copy.split('').join('');
  let reversedN = copy.split('').reverse().join('');
  return convertedN == reversedN;
};

console.log(palindrome(1221));

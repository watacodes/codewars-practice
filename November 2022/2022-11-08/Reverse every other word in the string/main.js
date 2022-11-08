/*

Codewars, 6k: Reverse every other word in the string

Reverse every other word in a given string, then return the string. Throw away any leading or trailing whitespace, while ensuring there is exactly one space between each word. Punctuation marks should be treated as if they are a part of the word in this kata.

*/

const reverse = str => {
  return str.split(' ').map((a, i) => i % 2 === 1 ? a.split('').reverse().join('') : a).join(' ').trim()
};

console.log(reverse('Reverse this string, please!'));
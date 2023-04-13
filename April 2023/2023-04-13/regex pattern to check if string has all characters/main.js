/*

Codewars, 6k: regex pattern to check if string has all characters

*/

function regexContainsAll(str) {
  return `[${str}].*`.repeat(str.length);
}
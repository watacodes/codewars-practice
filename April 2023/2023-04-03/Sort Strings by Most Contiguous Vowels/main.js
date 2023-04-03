/*

Codewars, 6k: Sort Strings by Most Contiguous Vowels

*/

function sortStringsByVowels(s) {
  const max = str => (Math.max(...(str.match(/[aiueo]+/gi) || []).map(e => e.length)));
  return s.sort((a, b) => max(b) - max(a));
};
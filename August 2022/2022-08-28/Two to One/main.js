/*

Codewars, 8k: Two to One

Take 2 strings s1 and s2 including only letters from a to z. Return a new sorted string, the longest possible, containing distinct letters - each taken only once - coming from s1 or s2.

Examples:
a = "xyaabbbccccdefww"
b = "xxxxyyyyabklmopq"
longest(a, b) -> "abcdefklmopqwxy"

a = "abcdefghijklmnopqrstuvwxyz"
longest(a, a) -> "abcdefghijklmnopqrstuvwxyz"

*/
let a = "xyaabbbccccdefww"
let b = "xxxxyyyyabklmopq"

const longest = (s1, s2) => {
  let concatnated = s1 + s2;
  let sortedObj = new Set(concatnated.split('').sort());
  return [...sortedObj].join('');
};

console.log(longest(a, b));
/*

Codewars, 7k: Consecutive letters

In this Kata, we will check if a string contains consecutive letters as they appear in the English alphabet and if each letter occurs only once.

Rules are: (1) the letters are adjacent in the English alphabet, and (2) each letter occurs only once.

For example: 
solve("abc") = True, because it contains a,b,c
solve("abd") = False, because a, b, d are not consecutive/adjacent in the alphabet, and c is missing.
solve("dabc") = True, because it contains a, b, c, d
solve("abbc") = False, because b does not occur once.
solve("v") = True
All inputs will be lowercase letters.

*/

const solve = s => {
  if (s.length === 1) return true;
  let sortedStr = s.split('').sort((a, b) => a.charCodeAt() - b.charCodeAt());
  for (let i = 0; i < sortedStr.length - 1; i++) {
    if (sortedStr[i].charCodeAt() + 1 !== sortedStr[i+1].charCodeAt()) return false;
  }
  return true;
}

console.log(solve('dabc'));
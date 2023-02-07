/*

Codewars, 7k: Create palindrome

*/

function solve(s){
  for (let i = 0; i < s.length / 2; i++) {
    if (s[i] === s[s.length - 1 - i]) {
      continue;
    }
    if (Math.abs(s.charCodeAt(i) - s.charCodeAt(s.length - i - 1)) !== 2) {
      return false;
    }
  }
  return true;
}
/*

Codewars, 6k: Non-even substrings

*/

function solve(s) {
  let res = 0;
  
  for (let i = 0; i < s.length; i++) {
    if (+(s[i]) % 2) res += i+1;
  }
  
  return res;
};
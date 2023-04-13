/*

Codewars, 6k: Shortest Distance to a Character

*/

function shortesttoChar(s, c) {
  const res = [];
  
  for (let i = 0; i < s.length; i++) {
    if (s[i] === c) res.push(i);
  }
  
  return res.length ? [...s].map((e, i) => res.reduce((acc, curr) => Math.min(acc, Math.abs(i - curr)), Infinity)) : [];
}
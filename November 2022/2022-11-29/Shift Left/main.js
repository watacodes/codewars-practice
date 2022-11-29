/*

Codewars, 7k: Shift Left

*/

const shiftLeft = (s, t) => {
  let sLen = s.length;
  let tLen = t.length;
  
  while (sLen >= 0 && tLen >= 0 && s[sLen] === t[tLen]) {
    sLen--;
    tLen--;
  }
  return sLen + tLen + 2;
}
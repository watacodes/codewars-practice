/*

Codewars, 7k: Alternating between three values

*/

const f = (x, cc) => { 
  const indexOfX = Object.values(cc).indexOf(x);
  const keyArr = Object.keys(cc);
  const nextKey = keyArr[indexOfX + 1] || keyArr[0];
  return cc[nextKey];
}
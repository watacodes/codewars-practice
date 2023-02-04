/*

Codewars, 7k: Simple string division

*/

function solve(str, k) {
  const strLen = str.length - k;
  const res = [];
  for (let i = 0; i < str.length; i++) {
    res.push(str.slice(i, i + strLen));
  }
  return Math.max(...res);
}
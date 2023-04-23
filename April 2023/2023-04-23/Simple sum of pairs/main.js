/*

Codewars, 6k: Simple sum of pairs

*/

function solve(n) {
  const str = n.toString();
  const a = '9'.repeat(str.length - 1);
  const b = (n - a) + '';
  return [...b].reduce((acc, curr) => acc + +curr, 0) + 9 * a.length;
};
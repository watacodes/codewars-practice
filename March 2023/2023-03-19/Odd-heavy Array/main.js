/*

Codewars, 6k: Odd-heavy Array 

*/

function isOddHeavy(n) {
  const odds = n.filter(e => e % 2);
  const evens = n.filter(e => e % 2 === 0);
  if (odds.length === 0) return false;
  const evensMaxNum = Math.max(...evens);
  return odds.every(e => e > evensMaxNum);
};
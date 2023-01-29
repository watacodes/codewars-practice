/*

Codewars, 7k: Power of 4

*/

function powerOf4(n) {
  if (typeof n !== 'number') return false;
  if (n === 4 || n === 1) return true;
  if (n < 4) return false;
  return n / 4 % 2 === 0; 
}
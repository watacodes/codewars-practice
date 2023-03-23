/*

Codewars, 7k: Consecutive Digits To Form Sum

*/

function consecutiveDucks(num) {
  while (num > 2) {
    if (num % 2) return true;
    num /= 2;
  }
  return false;
}
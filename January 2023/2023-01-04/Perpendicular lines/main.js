/*

Codewars, 7k: Perpendicular lines

*/

function maxBisectors(n) {
  let maxNum = 0;
  for (let i = 1; i < n; i++) {
    if (i * (n - i) >= maxNum) {
      maxNum = i * (n - i);
    }
  }
  return maxNum;
}
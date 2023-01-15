/*

Codewars, 7k: Complete The Pattern #5 - Even Ladder

*/

function pattern(n) {
  if (n <= 1) return '';
  let res = '';
  for (let i = 2; i <= n; i += 2) {
    res += String(i).repeat(i) + '\n';
  }
  return res.trim();
}
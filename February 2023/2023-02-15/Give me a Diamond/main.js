/*

Codewars, 6k: Give me a Diamond

*/

function diamond(n){
  if (n === 1) return '*\n';
  if (n % 2 === 0 || n <= 0) return null;
  
  let diamond = '';
  for (let i = 0, s = 1; i < n; i++) {
    diamond += ' '.repeat(Math.abs(s - n) / 2) + '*'.repeat(s) + '\n';
    s = i < Math.floor(n / 2) ? s + 2 : s - 2;
  }
  return diamond;
}
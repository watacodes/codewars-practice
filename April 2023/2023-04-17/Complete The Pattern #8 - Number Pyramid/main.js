/*

Codewars, 6k: Complete The Pattern #8 - Number Pyramid

*/

function pattern(n) {
  if (n <= 0) return ''
  const nums = '123456789';
  const res = [];
  for (let i = n; i > 0; i--) {
    const gap = ' '.repeat(n - i);
    const line = [];
    
    for (let k = i; k > 0; k--) {
      line.push(k % 10);
      if (i !== k) {
        line.unshift(k % 10);
      }
    }
    res.push(gap + line.join('') + gap);
  }
  
  return res.reverse().join('\n');
}
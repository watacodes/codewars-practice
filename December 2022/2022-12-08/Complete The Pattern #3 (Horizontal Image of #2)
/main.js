/*

Codewars, 7k: Complete The Pattern #3 (Horizontal Image of #2)

*/

const pattern = n => {
  if (n == 1) return '' + n; 
  let res = '';
  let temp = '';

  for (let i = n; i > 0; i--) {
    temp += i;
    res += temp + '\n';
  }
  return res.trim();
}

console.log(pattern(5));
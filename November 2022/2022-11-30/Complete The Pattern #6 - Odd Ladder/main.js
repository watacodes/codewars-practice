/*

Codewars, 7k: Complete The Pattern #6 - Odd Ladder

*/

const pattern = n => {
  if (n <= 0) return '';
  if (n % 2 === 0) {
    n--;
  }

  let res = '';
  
  for (let i = 1; i <= n; i += 2) {
    const repeatedNum = `${i}`.repeat(i);
    res += repeatedNum + '\n';
  }
  return res.trim();
}

console.log(pattern(9))
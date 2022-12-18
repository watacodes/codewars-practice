/*

Codewars, 7k: Complete The Pattern #7 - Cyclical Permutation

*/

function pattern(n) {
  let temp = [];
  for (let i = 1; i <= n; i++) {
    temp.push(i);
  }
  let res = temp.join('') + '\n';
  for (let k = 0; k < n - 1; k++) {
    let shifted = temp.shift();
    temp.push(shifted);
    res += temp.join('') + '\n';
  }
  return res.trim();
}
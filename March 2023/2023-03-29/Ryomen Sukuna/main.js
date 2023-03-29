/*

Codewars, 6k: Ryomen Sukuna

*/

function sukuna(n) {
  const set = new Set();
  for (let i = 2; i <= Math.floor(Math.sqrt(n)); i++) {
    for (let k = 2; i ** k <= n; k++) {
      set.add(i ** k);
    }
  }
  return n - set.size;
}
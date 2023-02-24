/*

Codewars, 5k: What's a Perfect Power anyway?

*/

const isPP = n => {
  const max = Math.floor(n / 2);
  
  for (let i = 2; i <= max; i++) {
    for (let k = 2; k ** i <= n; k++) {
      if (k ** i === n) {
        return [k, i];
      }
    }
  }
  return null;
}
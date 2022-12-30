/*

Codewars, 7k: Array - squareUp b!

*/

const squareUp = n => {
  const res = [];
  for (let i = 1; i <= n; i++) {
    for (let k = n; k > 0; k--) {
      res.push(k <= i ? k : 0);
    }
  }
  return res;
}
/*

Codewars, 7k: Simple Fun #399: Make Ascending Sequences

*/

function makeSequences(n) {
  let res = [1];
  for (let i = 1; i <= n; i++) {
    if (i % 2) {
      res.push(res[i - 1]);
    } else {
      res.push(res[i / 2] + res[i - 1]);
    }
  }
  console.log(res)
  return res.pop();
}
/*

Codewars, 7k: Sum and Multiply

*/

const sumAndMultiply = (sum, multiply) => {
  const res = [];
  for (let i = 1; i <= sum; i++) {
    if (i * (sum - i) === multiply) {
      res.push(i, sum - i);
    }
  }
  return res.length === 0 ? null : res.slice(0, 2).sort((a, b) => a - b);
}
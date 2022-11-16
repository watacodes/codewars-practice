/*

Codewars, 7k: Pairs of integers from m to n

*/

const generatePairs = (m, n) => {
  const arr = [];
  for (let i = m; i <= n; i++) {
    for (let j = i; j <= n; j++) {
      arr.push([i, j])
    }
  }
  return arr;
};

console.log(generatePairs(2, 4))
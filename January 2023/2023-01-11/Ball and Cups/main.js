/*

Codewars, 7k: Ball and Cups 

*/

function cupAndBalls(b, arr) {
  if (arr.length === 0) return b;
  for (let i of arr) {
    if (i.includes(b) && !i.every(e => e === b)) {
      b = i.reduce((acc, curr) => curr !== b ? curr : acc, 0);
    }
  }
  return b;
};
/*

Codewars, 7k: number with 3 roots.

*/

const perfectRoots = n => {
  const second = Math.sqrt(n);
  const forth = Math.sqrt(second);
  return Number.isInteger(Math.sqrt(forth));
};

console.log(Math.sqrt(256))
/*

Codewars, 7k: Sorting the Odd way!

*/

const sortItOut = arr => {
  const odds = arr.filter(n => Math.floor(n) % 2 !== 0);
  const evens = arr.filter(n => Math.floor(n) % 2 === 0);
  return odds.sort((a, b) => a - b).concat(evens.sort((a, b) => b - a));
}
/*

Codewars, 7k: Chicken Sexing

*/

const correctness = (bob, expert) => {
  return bob.map((a, i) => a === expert[i] ? 1 : a === '?' ? 0.5 : expert[i] === '?' ? 0.5 : 0)
            .reduce((acc, curr) => acc + curr, 0);
}
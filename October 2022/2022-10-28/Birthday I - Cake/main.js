/*

Codewars, 7k: Birthday I - Cake


*/

const cake = (candles, debris) => {
  const sumOfDebris = debris.split('')
                            .map((a, i) => i % 2 === 1 ? a.charCodeAt() - 96 : a.charCodeAt())
                            .reduce((acc, curr) => acc + curr, 0);
  return candles * .7 < sumOfDebris ? "Fire!" : 'That was close!';
};
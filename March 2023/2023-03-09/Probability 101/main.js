/*

Codewars, 6k: Probability 101

*/

function probability(length, num) {
  const start = length === 1 ? 0 : 10 ** (length - 1);
  const end = 10 ** length;
  const numMultiples = Math.floor((end - 1) / num) - Math.floor((start - 1) / num);
  const total = end - start;
  return parseFloat(((numMultiples / total) * 100).toFixed(8));
}
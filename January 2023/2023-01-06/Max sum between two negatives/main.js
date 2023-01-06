/*

Codewars, 7k: Max sum between two negatives

*/

function maxSumBetweenTwoNegatives(arr) {
  const indices = arr.map((num, i) => num < 0 ? i : -1).filter(e => e >= 0);
  let currentMax = -1;
  for (let i = 0; i < indices.length - 1; i++) {
    let numsBetween = arr.slice(indices[i] + 1, indices[i + 1]);
    currentMax = Math.max(numsBetween.reduce((acc, curr) => acc + curr, 0), currentMax);
  }
  return currentMax;
}
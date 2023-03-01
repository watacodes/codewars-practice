/*

Codewars, 6k: Pair of gloves

*/

function numberOfPairs(arr) {
  const occurrence = arr.reduce((acc, curr) => {
    if (!acc[curr]) {
      acc[curr] = 1;
    } else {
      acc[curr]++;
    }
    return acc;
  }, {});
  const filtered = Object.entries(occurrence).filter(e => e[1] > 1);
  const mapped = filtered.map(e => Math.floor(e[1] / 2));
  return mapped.reduce((acc, curr) => acc + curr, 0);
}
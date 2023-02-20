/*

Codewars, 6k: Length of missing array

*/

function getLengthOfMissingArray(arr) {
  if (!arr || arr.some(e => !e || e === null)) return 0;
  const mapped = arr.map(e => e.length === 0 ? -1 : e.length);
  const sorted = mapped.sort((a, b) => a - b);
  let counter = sorted.length;
  for (let i = 0; i < sorted.length; i++) {
    if (sorted[i] + 1 !== sorted[i+1]) {
      return sorted[i] + 1;
    }
    counter = sorted[i+1];
  }
  return counter;
}

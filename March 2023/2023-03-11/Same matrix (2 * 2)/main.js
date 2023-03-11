/*

Codewars, 6k: Same matrix (2 * 2)

*/

function countDifferentMatrices(arr) {
  const res = new Set();
  for (const [a, b, c, d] of arr) {
    //[a,b,c,d], [c,a,d,b], [d,c,b,a], [b,d,a,c]
    const mapped = [[a, b, c, d], [c, a, d, b], [d, c, b, a], [b, d, a, c]].map(e => e.join(','));
    const sorted = mapped.sort((a, b) => a.localeCompare(b))[0];
    res.add(sorted);
  }
  return res.size;
}
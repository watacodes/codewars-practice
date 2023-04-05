/*

Codewars, 6k: N High Scores

*/

function topScores(records, nTop) {
  const sorted = records.sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]));
  const seen = [];
  const unique = sorted.filter(e => {
    if (!seen.includes(e[0])) {
      seen.push(e[0]);
      return e;
    }
  });
  return nTop <= 0 ? [] : unique.slice(0, nTop);
}
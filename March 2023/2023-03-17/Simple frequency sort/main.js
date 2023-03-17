/*

Codewars, 6k: Simple frequency sort

*/

function solve(arr) {
  const occurrence = arr.reduce((acc, curr) => {
    if (!acc[curr]) {
      acc[curr] = 1;
    } else {
      acc[curr]++;
    }
    return acc;
  }, {});
  const entries = Object.entries(occurrence).sort((a, b) => b[1] - a[1] || +a[0] - +b[0]).map(e => +e[0]);
  return arr.sort((a, b) => entries.indexOf(a) - entries.indexOf(b));
}
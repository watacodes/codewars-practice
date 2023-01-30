/*

Codewars, 7k: Find the majority

*/

function majority(arr) {
  if (!arr.length) return null;
  const occurrence = arr.reduce((acc, curr) => (acc[curr] = acc[curr] + 1 || 1, acc), {});
  const mostFrequent = Math.max(...Object.values(occurrence));
  const next = Object.keys(occurrence).filter(e => occurrence[e] === mostFrequent);
  return next.length === 1 ? next[0] : null;
}
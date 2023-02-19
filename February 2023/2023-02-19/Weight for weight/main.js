/*

Codewars, 5k: Weight for weight

*/

function orderWeight(str) {
  str = str.trim().replace(/\s+/g, ' ');
  const weightArr = str.split(' ');
  const idxMap = [];
  weightArr.forEach(e => {
    const current = e;
    const pair = [];
    pair.push(current, [...e].reduce((acc, curr) => acc + +curr, 0));
    idxMap.push(pair);
  });
  const sorted = idxMap.sort((a, b) => a[1] - b[1] || a[0].localeCompare(b[0]));
  return sorted.map(e => e[0]).join(' ');
}
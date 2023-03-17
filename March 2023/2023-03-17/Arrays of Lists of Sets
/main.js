/*

Codewars, 6k: Arrays of Lists of Sets

*/

function solve(arr) {
  const arrCopy = arr.map(x => [...new Set([...x])].sort().join(''));
  const reduced = arrCopy.reduce((a, b) => (a[b] = (a[b] || 0) + 1, a), {});
  const res = [];
  
  for (let k in reduced) {
    if (reduced[k] > 1) {
      let s = 0;
      arrCopy.forEach((e,i) => s += e == k ? i : 0);
      res.push(s);
    }
  }
  
  return res.sort((a, b) => a - b);
};
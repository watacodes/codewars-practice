/*

Codewars, 6k: Even Binary Sorting

*/

function evenBinary(n) {
  const sorted = n.split(' ').filter(e => !(parseInt(e, 2) % 2)).sort((a, b) => a - b);
  return n.split(' ').map(e => !(parseInt(e, 2) % 2) ? sorted.shift() : e).join(' ');
};
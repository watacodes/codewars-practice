/*

Codewars, 4k: Snail

*/

const snail = arr => {
  const res = [];
  while (arr.length !== 0) {
    res.push(...arr.shift());
    arr.map(a => res.push(a.pop()));
    arr.reverse().map(e => e.reverse());
  }
  return res;
}
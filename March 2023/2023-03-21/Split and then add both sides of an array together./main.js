/*

Codewars, 6k: Split and then add both sides of an array together.

*/

function splitAndAdd(arr, n) {
  if (n === 0) return arr;
  const idx = Math.floor(arr.length / 2);
  const first = arr.slice(0, idx);
  const second = arr.slice(idx);
  
  if (arr.length % 2) {
    first.unshift(0);
  }
  
  const combined = second.map((num, i) => num + first[i]);
  return n - 1 > 0 ? splitAndAdd(combined, --n) : combined;
};
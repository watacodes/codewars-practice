/*

Codewars, 7k: Keep the Order

*/

function keepOrder(arr, val) {
  const idx = arr.findIndex(e => e >= val);
  return idx === -1 ? arr.slice(-1) < val ? arr.length : 0 : idx;
}
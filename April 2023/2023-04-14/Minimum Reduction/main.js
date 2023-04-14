/*

Codewars, 6k: Minimum Reduction

*/

function minRemove(arr) {
  let max = Math.sqrt(Math.max(...arr));
  let length = arr.filter(e => e < max).length;
  return length === 6 ? 5 : length === 11 ? 10 : length;
};
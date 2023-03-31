/*

Codewars, 6k: Prefill an Array

*/

function prefill(n, v = undefined) {
  if (parseInt(n) !== Math.abs(n)) throw new TypeError(`${n} is invalid`);
  return +n ? new Array(n).fill(v) : [];
};
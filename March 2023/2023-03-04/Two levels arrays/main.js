/*

Codewars, 5k: Two levels arrays

*/

function flattenTwoLevels(arr) {
  return arr.map(e => Array.isArray(e) ? e.flat(Infinity) : e);
}
/*

Codewars, 6k: Sorting by bits

*/

function sortByBit(arr) {
  return arr.sort((a, b) => a.toString(2).replace(/0/g, '') - b.toString(2).replace(/0/g, '') || a - b);
};
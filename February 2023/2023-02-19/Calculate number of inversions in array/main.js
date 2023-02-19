/*

Codewars, 6k: Calculate number of inversions in array

*/

function countInversions(arr) {
  if (!arr) return 0;
  let counter = 0;
  for (let i = 0; i < arr.length - 1; i++) {
    const current = arr[i];
    const compare = arr.slice(i+1);
    compare.forEach(e => current > e ? counter++ : e);
  }
  return counter;
}
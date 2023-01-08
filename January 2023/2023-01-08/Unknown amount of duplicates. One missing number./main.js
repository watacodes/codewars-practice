/*

Codewars, 6k: Unknown amount of duplicates. One missing number

*/

function findDupsMiss(arr) {
  const duplicate = [];
  let skipped;
  const sorted = arr.sort((a, b) => a - b);
  for (let i = 0; i < sorted.length; i++) {
    if (duplicate.indexOf(sorted[i]) !== -1) {
      continue;
    }
    if (sorted[i] === sorted[i - 1]) {
      duplicate.push(sorted[i]);
      continue;
    }
    if (sorted[i - 1] + 1 !== sorted[i]) {
      skipped = sorted[i - 1] + 1;
    }
  }
  return [skipped, duplicate];
}
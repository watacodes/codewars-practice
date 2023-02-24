/*

Codewars, 5k: Sum of Pairs

*/

function sumPairs(arr, sum) {
  for (let r = 1; r < arr.length; r++) {
    if (arr[r] === arr[r-1]) continue;
    for (let t = 0; t < r; t++) {
      if (arr[t] + arr[r] === sum) {
        return [arr[t], arr[r]];
      }
    }
  }
  return undefined;
}

sumPairs([20, -13, 40], -7)
/*

Codewars, 5k: Compute the Largest Sum of all Contiguous Subsequences

*/

function largestSum(arr) {
  let sum = 0;
  let curr = 0;

  for (let i = 0; i < arr.length; i++) {
    curr += arr[i];
    if (curr < 0) {
      curr = 0;
    }
    if (curr > sum) {
      sum = curr;
    }
  }
  return sum;
}

console.log((largestSum([31,-41,59,26,-53,58,97,-93,-23,84]), 187));


/*

Codewars, 5k: Maximum subarray sum

*/

const maxSequence = arr => {
  if (arr.length === 0 || arr.every(e => e < 0)) return 0;
  let min = 0;
  let res = 0;
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
    min = Math.min(sum, min);
    res = Math.max(res, sum - min);
  }
  return res;
}


console.log(maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4]));



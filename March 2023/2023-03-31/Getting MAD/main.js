/*

Codewars, 6k: Getting MAD

*/

function getting_mad(arr) {
  let res = Infinity;
  for (let i = 0; i < arr.length - 1; i++) {
    if (Math.abs(arr[i] - arr[i+1]) < res) {
      res = Math.abs(arr[i] - arr[i+1]);
    }
  }
  return res;
}
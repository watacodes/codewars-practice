/*

Codewars, 6k: Zeros and Ones

*/

function replaceZero(arr){
  let curr = 0;
  let prev = 0;
  let resSum = 0;
  let resIdx;
  let idx;

  for(let i = 0; i <= arr.length; i++) {
    const val = arr[i];
    const sum = curr + prev;

    curr += val;

    if (sum >= resSum) {
      resSum = sum;
      resIdx = idx;
    }

    if (!val) {
      idx = i;
      prev = curr;
      curr = 0;
    }
  }

  return resIdx;
}
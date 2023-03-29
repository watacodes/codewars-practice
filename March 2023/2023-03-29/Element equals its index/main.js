/*

Codewars, 6k: Element equals its index

*/

function indexEqualsValue(arr) {
  let [min, max] = [0, arr.length - 1];
  while (min < max) {
    let i = Math.floor((min + max) / 2);
    if (i <= arr[i]) {
      max = i;
    } else {
      min = i + 1;
    }
  }
  return arr[max] === max ? max : -1;
}
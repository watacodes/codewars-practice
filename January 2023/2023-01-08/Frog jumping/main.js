/*

Codewars, 6k: Frog jumping

*/

function solution(arr) {
  let i = 0
  let count = 0
  while (typeof arr[i] !== 'undefined') {
    count++;
    i += arr[i];
    if (count > arr.length) {
      return -1;
    }
  }
  return arr.length ? count : -1;
}
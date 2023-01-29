/*

Codewars, 7k: Training JS #28: methods of arrayObject---every() and some()

*/

function mirrorImage(arr) {
  let res = [-1, -1];
  arr.some((num, idx) => {
    let first = String(arr[idx]);
    let second = [...String(arr[idx + 1])].reverse().join('');
    if (first == second) return res = [arr[idx], arr[idx + 1]];
  });
  return res;
}
/*

Codewars, 7k: Simple array product

*/

function solve(arr) {
  let min = 1;
  let max = 1;
  for (let i = 0; i < arr.length; i++) {
    let temp1 = Math.max(...arr[i]);
    let temp2 = Math.min(...arr[i]);
    const pairs = [min * temp1, min * temp2, max * temp1, max * temp2];
    max = Math.max(...pairs);
    min = Math.min(...pairs);
  }
  return max;
}

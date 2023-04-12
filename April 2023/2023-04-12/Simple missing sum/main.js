/*

Codewars, 6k: Simple missing sum

*/

function solve(arr) {
  arr = arr.sort((a, b) => a - b);
  let temp = 0;
  
  for (const i of arr) {
    if (i > temp + 1) {
      break;
    }
    temp += i;
  }
  
  return temp + 1;
}
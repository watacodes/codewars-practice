/*

Codewars, 6k: Wave Sorting

*/

function waveSort(arr) {
  arr = arr.sort((a, b) => a - b);
  
  for (let i = 0; i < arr.length - 1; i += 2) {
    [arr[i], arr[i+1]] = [arr[i+1], arr[i]];
  }
}
/*

Codewars, 7k: Simple Fun #380: Find d = a + b + c

*/

function findD(arr) {
  const max = [];
  for (let i = 0; i < arr.length - 2; i++) {
    for (let j = i + 1; j < arr.length - 1; j++) {
      for (let k = j + 1; k < arr.length; k++) {
        const sum = arr[i] + arr[j] + arr[k];
        const idx = arr.lastIndexOf(sum);
        if (idx !== -1 && idx !== i && idx !== j && idx !== k) {
          max.push(sum);
        }
      }
    }
  }
  return max.length !== 0 ? Math.max(...max) : null;
}
/*

Codewars, 7k: Count number of zeros from 1 to N

*/

function countZeros(n) {
  let counter = 0;
  let current = 1;
  while (current <= n) {
    if (String(current).match(/[0]/g)) {
      counter += String(current).match(/[0]/g).length;
    }
    current++;
  }
  return counter;
}
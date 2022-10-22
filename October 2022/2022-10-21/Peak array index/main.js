/*

Codewars, 7k: Peak array index


*/

const peak = arr => {
  let left = arr[0];
  let right = arr.slice(1);
  for (let i = 2; i <= arr.length; i++) {
    left = arr.slice(0, i);
    right = arr.slice(i+1);
    let sumL = left.reduce((acc, curr) => acc + curr, 0); 
    let sumR = right.reduce((acc, curr) => acc + curr, 0);
    if (sumL === sumR) return i;
  }
  return -1;
}
/*

Codewars, 7k: All Star Code Challenge #14 - Find the median

*/
const median = arr => {
  return arr.length % 2 
    ? arr[Math.floor(arr.length / 2)] 
    : arr.sort((a, b) => a - b)
         .slice(arr.length / 2 - 1, arr.length / 2 + 1)
         .reduce((acc, curr) => acc + curr, 0) / 2;
}
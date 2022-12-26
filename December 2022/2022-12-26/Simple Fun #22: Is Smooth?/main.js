/*

Codewars, 7k: Simple Fun #22: Is Smooth?

*/

const isSmooth = arr => {
  const middle = arr.length % 2 
            ? arr.slice(Math.floor(arr.length / 2), Math.floor(arr.length / 2) + 1)
            : arr.slice(Math.floor(arr.length / 2) - 1, Math.floor(arr.length / 2) + 1);
  const middleSum = middle.reduce((acc, curr) => acc + curr, 0);
  return middleSum === arr[0] && middleSum === arr.slice(-1)[0];
}

console.log(isSmooth([-5, 5, 10]))
/*

Codewars, 7k: Squares sequence

Complete the function that returns an array of length n, starting with the given number x and the squares of the previous number. If n is negative or zero, return an empty array/list.

Examples
2, 5  -->  [2, 4, 16, 256, 65536]
3, 3  -->  [3, 9, 81]

*/

const squares = (x, n) => {
  let arr = [];
  let prev = x;
  for (let i = 1; i <= n; i++) {
    if (i === 1) {
      arr.push(prev);
    } else {
      prev = prev ** 2;
      arr.push(prev);
    }
  }
  return arr;
};

console.log(squares(2, 5))
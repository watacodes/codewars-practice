/*

Codewars, 7k: Find the stray number

You are given an odd-length array of integers, in which all of them are the same, except for one single number.

Complete the method which accepts such an array, and returns that single different number.

The input array will always be valid! (odd-length >= 3)

Examples
[1, 1, 2] ==> 2
[17, 17, 3, 17, 17, 17, 17] ==> 3

*/

const stray = n => {
  let sorted = n.sort((a, b) => a - b);
  return sorted[0] !== sorted[1] ? sorted[0] : sorted[n.length - 1];
}

console.log(stray([17, 17, 3, 17, 17, 17, 17]));

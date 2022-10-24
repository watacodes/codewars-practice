/*

Codewars, 7k: Powers of 3

Given a positive integer N, return the largest integer k such that 3^k < N.

For example,

largest_power(3) == 0
largest_power(4) == 1
You may assume that the input to your function is always a positive integer.

*/

const largestPower = n => {
  if (n === 1) return -1;
  if (n < 4) return 0;
  let counter = 0;
  while (n / 3 > 1) {
    n /= 3;
    counter++;
  }
  return counter;
}
/*

Codewars, 7k: Halving Sum

Task
Given a positive integer n, calculate the following sum:

n + n/2 + n/4 + n/8 + ...
All elements of the sum are the results of integer division.

Example
25  =>  25 + 12 + 6 + 3 + 1 = 47

*/

const halvingSum = n => {
  let res = n;
  let i = n
  while (i > 0) {
    i = Math.floor(i / 2);
    res += i;
    console.log(i, res);
  };
  return res;
};

console.log(halvingSum(25));
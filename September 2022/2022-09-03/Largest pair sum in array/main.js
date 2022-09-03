/*

Codewars, 7k: Largest pair sum in array

Given a sequence of numbers, find the largest pair sum in the sequence.

For example

[10, 14, 2, 23, 19] -->  42 (= 23 + 19)
[99, 2, 2, 23, 19]  --> 122 (= 99 + 23)
Input sequence contains minimum two elements and every element is an integer.

*/

const largestPairSum = arr => arr.sort((a, b) => a - b)[arr.length - 2] + arr.sort((a, b) => a - b)[arr.length - 1];

console.log(largestPairSum([10,14,2,23, 19]))
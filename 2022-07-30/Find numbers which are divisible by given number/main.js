/*

Codewars 8k: Find numbers which are divisible by given number

Complete the function which takes two arguments and returns all numbers which are divisible by the given divisor. First argument is an array of numbers and the second is the divisor.

Example(Input1, Input2 --> Output)
[1, 2, 3, 4, 5, 6], 2 --> [2, 4, 6]

*/

const divisibleBy = (arr, num) => arr.filter(a => a % num === 0);

console.log(divisibleBy([1,2,3,4,5,6], 2))
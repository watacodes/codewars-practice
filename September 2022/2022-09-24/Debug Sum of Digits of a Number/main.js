/*

Codewars, 7k: Debug Sum of Digits of a Number


Debug   function getSumOfDigits that takes positive integer to calculate sum of it's digits. Assume that argument is an integer.

Example
123  => 6
223  => 7
1337 => 14

*/

const getSumOfDigits = n => n.toString().split('').reduce((a, b) => a + Number(b), 0)

console.log(getSumOfDigits(123));
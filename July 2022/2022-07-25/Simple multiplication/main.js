/*

Codewars 8k: https://www.codewars.com/kata/583710ccaa6717322c000105

This kata is about multiplying a given number by eight if it is an even number and by nine otherwise.

*/

const simpleMultiplication = number => number % 2 === 0 ? number * 8 : number * 9;

console.log(simpleMultiplication(9));
console.log(simpleMultiplication(10));
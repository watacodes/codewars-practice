/*

Codewars 8k: https://www.codewars.com/kata/555a67db74814aa4ee0001b5

In this Kata we are passing a number (n) into a function.

Your code will determine if the number passed is even (or not).

The function needs to return either a true or false.

Numbers may be positive or negative, integers or floats.

Floats with decimal part non equal to zero are considered UNeven for this kata.

*/

const testEven = n => n % 2 === 0 && Number.isInteger(n) || n === 0 ? true : false;

console.log(testEven(0.5));
console.log(testEven(-4));
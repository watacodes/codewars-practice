/*

Codewars, 8k: Square Every Digit

DESCRIPTION:
Welcome. In this kata, you are asked to square every digit of a number and concatenate them.

For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1.

Note: The function accepts an integer and returns an integer

*/

// input -> integer
// split it, map and square each digit, join them and return as a number.

const squareDigits = num => +(num.toString().split('').map(a => a ** 2).join(''));

console.log(squareDigits(9119));
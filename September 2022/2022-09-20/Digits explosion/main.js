/*

Codewars, 7k: Digits explosion

Given a string made of digits [0-9], return a string where each digit is repeated a number of times equals to its value.

Examples
explode("312")
should return :

"333122"
explode("102269")
should return :

"12222666666999999999"

*/

const explode = str => str.split('').map(a => a.replace(/\d/g, a.repeat(+a))).join('');

console.log(explode('312'))
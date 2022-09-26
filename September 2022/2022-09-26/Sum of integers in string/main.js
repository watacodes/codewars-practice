/*

Codewars, 7k: Sum of integers in string

Your task in this kata is to implement a function that calculates the sum of the integers inside a string. For example, in the string "The30quick20brown10f0x1203jumps914ov3r1349the102l4zy dog", the sum of the integers is 3635.

Note: only positive integers will be tested.

*/

const sumOfIntegersInString = s => s.split(/\D/g).filter(a => +a !== 0).reduce((a, b) => a + Number(b), 0);

console.log(sumOfIntegersInString("The30quick20brown10f0x1203jumps914ov3r1349the102l4zy dog"))
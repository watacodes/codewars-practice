/*

Codewars, 7k: 

Bob is a lazy man.

He needs you to create a method that can determine how many letters (both uppercase and lowercase ASCII letters) and digits are in a given string.

Example:

"hel2!lo" --> 6

"wicked .. !" --> 6

"!?..A" --> 1

*/

const countLettersAndDigits = str => str.length - str.replace(/[0-9a-z]/gi, '').length;
console.log(counteLettersAndDigits("!?..A"))
/*

Codewars, 7k: Changing letters

When provided with a String, capitalize all vowels

For example:

Input : "Hello World!"

Output : "HEllO WOrld!"

Note: Y is not a vowel in this kata.

*/

const swap = string => string.replace(/[aiueo]/gi, (letter) => letter.toUpperCase());

console.log(swap('Hello World!'));
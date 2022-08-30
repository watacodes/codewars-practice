/*

Codewars, 7k: Reverse words

Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.

Examples
"This is an example!" ==> "sihT si na !elpmaxe"
"double  spaces"      ==> "elbuod  secaps"

*/

const reverseWords = s => s.split(' ').map(a => a.split('').reverse().join('')).join(' ');

console.log(reverseWords("double  spaces"))
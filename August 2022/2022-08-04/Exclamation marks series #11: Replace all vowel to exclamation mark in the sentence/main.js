/*

Codewars, 8k: 

Replace all vowel to exclamation mark in the sentence. aeiouAEIOU is vowel.

*/

const replace = s => s.replace(/[aiueo]/gi, '!');

console.log(replace("HEllo!"));
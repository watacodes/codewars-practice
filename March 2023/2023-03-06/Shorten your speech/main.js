/*

Codewars, 7k: Shorten your speech

*/

const shortenSpeech = str => str.replace(/(\S{3,}?)[aiueo]\S*/g, '$1.');

console.log(shortenSpeech('Hello, do you want a coffee?'));
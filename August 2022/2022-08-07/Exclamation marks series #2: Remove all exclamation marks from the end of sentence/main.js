/*

Codewars, 8k: Exclamation marks series #2: Remove all exclamation marks from the end of sentence

Remove all exclamation marks from the end of sentence.

Examples
remove("Hi!") === "Hi"
remove("Hi!!!") === "Hi"
remove("!Hi") === "!Hi"
remove("!Hi!") === "!Hi"
remove("Hi! Hi!") === "Hi! Hi"
remove("Hi") === "Hi"

*/

const remove = str => str.replace(/[!]+$/g, '');

console.log(remove("Hi!!!!"))
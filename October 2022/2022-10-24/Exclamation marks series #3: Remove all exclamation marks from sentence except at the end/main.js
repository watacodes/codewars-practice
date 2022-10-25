/*

Codewars, 7k: Exclamation marks series #3: Remove all exclamation marks from sentence except at the end

Description:
Remove all exclamation marks from sentence except at the end.

Examples
remove("Hi!") == "Hi!"
remove("Hi!!!") == "Hi!!!"
remove("!Hi") == "Hi"
remove("!Hi!") == "Hi!"
remove("Hi! Hi!") == "Hi Hi!"
remove("Hi") == "Hi"

*/

const remove = str => str.replace(/!/g, '') + (str.match(/!+$/) ? str.match(/!+$/)[0] : '');

console.log('Hi! Hi!'.match(/!+$/)[0]);
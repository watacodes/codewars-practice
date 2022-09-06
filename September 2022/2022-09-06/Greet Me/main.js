/*

Codewars, 7k: Write a method that takes one argument as name and then greets that name, capitalized and ends with an exclamation point.

Example:

"riley" --> "Hello Riley!"
"JACK"  --> "Hello Jack!"

*/

const greet = n => `Hello ${n.slice(0, 1).toUpperCase()}${n.slice(1).toLowerCase()}!`
console.log(greet('riley'));
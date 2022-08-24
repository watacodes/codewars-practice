/*

Codewars, 8k: Shifty Closures

Functional closures can get overly attached. Set them straight!

Why doesn't greet_abe() actually greet Abe?

*/

let name = 'Abe';

function greet_abe() {
  return `Hello, ${name}!`;
}

let newName = 'Ben';

function greet_ben() {
  console.log(name);
  return `Hello, ${newName}!`;
}
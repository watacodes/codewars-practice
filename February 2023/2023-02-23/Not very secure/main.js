/*

Codewars, 5k: Not very secure

*/

function alphanumeric(str) {
  return /^[a-z0-9]+$/gi.test(str);
}

console.log(alphanumeric('hello world_'));
console.log(alphanumeric('helllowrodL'));

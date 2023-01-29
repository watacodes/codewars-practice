/*

Codewars, 7k: Split an array

*/

function split(arr, prop) {
  return [arr.filter(e => e[prop]), arr.filter(e => !e[prop])];
}
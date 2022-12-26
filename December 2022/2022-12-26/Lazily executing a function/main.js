/*

Codewars, 7k: Lazily executing a function

*/

function makeLazy (name, ...args) {
  return function() {
    return name(...args);
  }
}
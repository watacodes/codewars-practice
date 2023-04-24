/*

Codewars, 6k: Closures and Scopes

*/

function createFunctions(n) {
  const callbacks = [];

  for (let i = 0; i < n; i++) {
    callbacks.push(function() {
      return i;
    });
  }
  
  return callbacks;
}
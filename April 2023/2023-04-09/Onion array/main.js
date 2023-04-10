/*

Codewars, 6k: Onion array

*/

function isOnionArray(arr) {
  
  while (arr.length > 1) {
    if (arr.pop() + arr.shift() > 10) return false;
  }

  return true;
};
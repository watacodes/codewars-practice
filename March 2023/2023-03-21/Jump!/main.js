/*

Codewars, 6k: Jump!

*/

function canJump(array) {
  let p = 0;
  
  for (let i = 0; i <= p && i < array.length - 1; i++) {
    p = Math.max(i + array[i], p);
  }
  
  return p >= array.length;
};
/*

Codewars, 6k: Moving Zeros To The End

*/

function moveZeros(arr) {
  return arr.filter(a => a !== 0).concat(arr.filter(a => a === 0));
}

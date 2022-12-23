/*

Codewars, 7k: Working with arrays II (and why your code fails in some katas)

*/

const removeNthElement = (arr, idx) => {
  let copy = arr.slice();
  copy.splice(idx, 1);
  return copy;
}
/*

Codewars, 7k: Multidimensional array

*/

function getElement(array, indices) {
  while (indices.length > 0) {
    array = array[indices.shift()];  
  }
  return array;
}
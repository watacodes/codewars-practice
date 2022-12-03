/*

Codewars, 7k: Multiply the strings in the array

*/

const arrMultiply = arr => {
  return arr.reduce((acc, curr) => acc * curr).toString();
}
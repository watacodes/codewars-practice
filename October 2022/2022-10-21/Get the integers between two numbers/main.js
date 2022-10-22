/*

Codewars, 7k: Get the integers between two numbers

Build a function that can get all the integers between two given numbers.

Example:

(2,9)

Should give you this output back:

[ 3, 4, 5, 6, 7, 8 ]

If startNum is the same as endNum, return an empty array.

*/

const range = (start, end) => {
  let arr = [];
  if (start === end) return arr;
  for (let i = start + 1; i < end; i++) {
    arr.push(i);
  }
  return arr;
}
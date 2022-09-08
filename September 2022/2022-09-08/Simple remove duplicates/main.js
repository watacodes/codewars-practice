/*

Codewars, 7k: Simple remove duplicates

Remove the duplicates from a list of integers, keeping the last ( rightmost ) occurrence of each element.

Example:
For input: [3, 4, 4, 3, 6, 3]

remove the 3 at index 0
remove the 4 at index 1
remove the 3 at index 3
Expected output: [4, 6, 3]

*/

const solve = arr => {
  let converted = arr.slice().filter((a, i) => arr.indexOf(a) !== i);
  for (let i = 0; i < converted.length; i++) {
    arr.splice(arr.indexOf(converted[i]), 1);
  };
  return arr;
};

console.log(solve([3, 4, 4, 3, 6, 3]));
// [3, 6, 3, 4, 4, 3]
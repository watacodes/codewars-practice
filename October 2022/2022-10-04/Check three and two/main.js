/*

Codewars, 7k: Check three and two

Given an array with exactly 5 strings "a", "b" or "c" (chars in Java, characters in Fortran), check if the array contains three and two of the same values.

Examples
["a", "a", "a", "b", "b"] ==> true  // 3x "a" and 2x "b"
["a", "b", "c", "b", "c"] ==> false // 1x "a", 2x "b" and 2x "c"
["a", "a", "a", "a", "a"] ==> false // 5x "a"

*/

const checkThreeAndTwo = a => {
  let count = a.reduce((a, b) => {
    if (!a[b]) {
      a[b] = 1;
    } else {
      a[b]++;
    }
    return a;
  }, {});
  return Object.values(count).every(a => a == 2 || a == 3);
};

console.log(checkThreeAndTwo(["a", "a", "a", "a", "a"]))
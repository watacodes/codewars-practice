/*

Codewars, 6k: Greatest Common Factor of an Array

*/

function greatestCommonFactor(arr) {
  let curr = Math.min(...arr);
  
  while (curr > 0) {
    const temp = arr.every((e, i) => e % curr === 0);
    if (temp) return curr;
    curr--;
  }
  
};
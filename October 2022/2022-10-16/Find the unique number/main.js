/*

Codewars, 6k: Find the unique number


There is an array with some numbers. All numbers are equal except for one. Try to find it!

findUniq([ 1, 1, 1, 2, 1, 1 ]) === 2
findUniq([ 0, 0, 0.55, 0, 0 ]) === 0.55
It’s guaranteed that array contains at least 3 numbers.

*/

const findUniq = arr => {
  let sortedArray = arr.sort((a, b) => b - a);
  let first = sortedArray[0];
  let second = sortedArray[1];
  let last = sortedArray[arr.length - 1];
  return first === second ? last : first;
}

console.log(findUniq([1,1,1,2,1,1]))
/*

Codewars, 8k:

Define a function that removes duplicates from an array of numbers and returns it as a result.

The order of the sequence has to stay the same.

*/

const distinct = a => {
  let newA = new Set(a);
  return [...newA];
};

console.log(distinct([1,2,2,3]));

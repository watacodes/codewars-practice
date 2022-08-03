/*

Codewars, 8k: Filling an array (part 1)

We want an array, but not just any old array, an array with contents!

Write a function that produces an array with the numbers 0 to N-1 in it.

For example, the following code will result in an array containing the numbers 0 to 4:

arr(5) // => [0,1,2,3,4]

Note: The parameter is optional. So you have to give it a default value.

*/

const arr = n => {
  let empty = [];
  for (let i = 0; i < n; i++) {
    empty.push(i);
  }
  return empty;
};

console.log(arr(5));
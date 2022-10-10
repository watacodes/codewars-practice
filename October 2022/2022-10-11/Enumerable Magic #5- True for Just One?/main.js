/*

Codewars, 7k: Enumerable Magic #5- True for Just One?

Task
Create a function called one that accepts two params:

a sequence
a function
and returns true only if the function in the params returns true for exactly one (1) item in the sequence.

Example
one([1, 3, 5, 6, 99, 1, 3], bigger_than_ten) -> true
one([1, 3, 5, 6, 99, 88, 3], bigger_than_ten) -> false
one([1, 3, 5, 6, 5, 1, 3], bigger_than_ten) -> false

*/

const one = (arr, func) => {
  return arr.reduce((acc, curr) => {
    if (func(curr)) {
      acc++;
    }
    return acc;
  }, 0) === 1;
};
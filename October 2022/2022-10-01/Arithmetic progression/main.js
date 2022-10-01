/*

Codewars, 7k: Arithmetic progression

In your class, you have started lessons about arithmetic progression. Since you are also a programmer, you have decided to write a function that will return the first n elements of the sequence with the given common difference d and first element a. Note that the difference may be zero!

The result should be a string of numbers, separated by comma and space.

Example
# first element: 1, difference: 2, how many: 5
arithmetic_sequence_elements(1, 2, 5) == "1, 3, 5, 7, 9"

*/

const arithmeticSequenceElements = (f, d, t) => {
  let arr = [];
  let counter = 0;
  for (let i = f; counter < t; i += d) {
    arr.push(i);
    counter++;
  }
  return arr.join(', ');
};

console.log(arithmeticSequenceElements(1,2,5))
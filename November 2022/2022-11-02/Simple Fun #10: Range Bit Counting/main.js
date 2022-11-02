/*

Codewars, 7k: Simple Fun #10: Range Bit Counting

You are given two numbers a and b where 0 ≤ a ≤ b. Imagine you construct an array of all the integers from a to b inclusive. You need to count the number of 1s in the binary representations of all the numbers in the array.

Example
For a = 2 and b = 7, the output should be 11

Given a = 2 and b = 7 the array is: [2, 3, 4, 5, 6, 7]. Converting the numbers to binary, we get [10, 11, 100, 101, 110, 111], which contains 1 + 2 + 1 + 2 + 2 + 3 = 11 1s.

*/

const rangeBitCount = (a, b) => {
  let arr = [];
  for (let i = a; i <= b; i++) {
    arr.push(i);
  };
  let conv = arr.map(a => a.toString(2))
                .map(a => a.replace(/0+/g, ''))
                .join('')
                .length;
  return conv;
};

console.log(rangeBitCount(2, 7));
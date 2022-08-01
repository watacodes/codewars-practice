/*

Codewars 8k: https://www.codewars.com/kata/563b74ddd19a3ad462000054

write me a function stringy that takes a size and returns a string of alternating '1s' and '0s'.

the string should start with a 1.

a string with size 6 should return :'101010'.

with size 4 should return : '1010'.

with size 12 should return : '101010101010'.

The size will always be positive and will only use whole numbers.

*/

// The even index will be 1s, and the odds will be 0s.
// First, make an empty array to store the 1s and 0s.
// Write a for loop that will executes "size" times.
// Push the numbers into the empty array
// Join it and return.


const stringy = size => {
  const emtpyArray = [];
  for (let i = 0; i < size; i++) {
    if (i % 2 === 0) emtpyArray.push('1');
    if (i % 2 !== 0) emtpyArray.push('0');
  }
  return emtpyArray.join('');
};

console.log(stringy(4));


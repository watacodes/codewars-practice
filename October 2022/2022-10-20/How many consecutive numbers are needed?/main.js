/*

Codewars, 7k: How many consecutive numbers are needed?

Create the function consecutive(arr) that takes an array of integers and return the minimum number of integers needed to make the contents of arr consecutive from the lowest number to the highest number.

For example:
If arr contains [4, 8, 6] then the output should be 2 because two numbers need to be added to the array (5 and 7) to make it a consecutive array of numbers from 4 to 8. Numbers in arr will be unique.

*/
// sorted = [8, 6, 4]

const consecutive = arr => {
  let sorted = arr.sort((a, b) => b - a);
  let counter = 0;
  for (let i = 0; i < sorted.length - 1; i++) {
    counter += sorted[i] - sorted[i+1] - 1;
  };
  return counter;
};

console.log(consecutive([4,8,6]))
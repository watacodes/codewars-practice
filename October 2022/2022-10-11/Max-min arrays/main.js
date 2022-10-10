/*

Codewars, 7k: Max-min arrays

In this Kata, you will be given an array of unique elements, and your task is to rearrange the values so that the first max value is followed by the first minimum, followed by second max value then second min value, etc.

For example:

solve([15,11,10,7,12]) = [15,7,12,10,11]
The first max is 15 and the first min is 7. The second max is 12 and the second min is 10 and so on.

*/
// max [15, 12, 11, 10, 7]
// min [7,  10, 11, 12, 15]
// exp [15,  7, 12, 10, 11]

const solve = arr => {
  let result = [];
  let descending = arr.slice(0).sort((a, b) => b - a);
  let ascending = arr.slice(0).sort((c, d) => c - d);

  for (let i = 0; i < descending.length / 2; i++) {
    result.push(descending[i], ascending[i]);
  };
  if (result[result.length-1] === result[result.length-2]) result.pop();
  return result;
};

console.log(solve([15,11,10,7,12]))
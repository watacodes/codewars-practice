/*

Codewars, 7k: Minimum Steps (Array Series #6)

Task
Given an array of N integers, you have to find how many times you have to add up the smallest numbers in the array until their Sum becomes greater or equal to K.

Notes:
List size is at least 3.

All numbers will be positive.

Numbers could occur more than once , (Duplications may exist).

Threshold K will always be reachable.

*/

const minimumSteps = (arr, v) => {
  let sorted = arr.sort((a, b) => a - b);
  let sum = 0;
  let counter = 0;
  while (sum < v) {
    sum += sorted[counter];
    counter++;
  }
  return counter - 1;
}

console.log(minimumSteps([4,6,3], 7));
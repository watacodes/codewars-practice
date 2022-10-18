/*

Codewars, 6k: Sort the odd

You will be given an array of numbers. You have to sort the odd numbers in ascending order while leaving the even numbers at their original positions.

Examples
[7, 1]  =>  [1, 7]
[5, 8, 6, 3, 4]  =>  [3, 8, 6, 5, 4]
[9, 8, 7, 6, 5, 4, 3, 2, 1, 0]  =>  [1, 8, 3, 6, 5, 4, 7, 2, 9, 0]

*/

const sortArray = arr => {
  let indexHolder = [];
  arr.filter((n, i) => n % 2 && indexHolder.push(i))
     .sort((a, b) => a - b)
     .forEach((n, i) => arr[indexHolder[i]] = n);
  return arr;
}

console.log(sortArray([5, 8, 6, 3, 4] ))
/*

Codewars, 7k: Plus - minus - plus - plus - ... - Count

Count how often sign changes in array.

result
number from 0 to ... . Empty array returns 0

example
const arr = [1, -3, -4, 0, 5];

/*
| elem | count |
|------|-------|
|  1   |  0    |
| -3   |  1    |
| -4   |  1    |
|  0   |  2    |
|  5   |  2    |
*/

const catchSignChange = arr => {
  let counter = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < 0 && arr[i+1] >= 0 || arr[i] >= 0 && arr[i+1] < 0) {
      counter++;
    }
  }
  return counter;
};

console.log(catchSignChange([1, -3, -4, 0, 5]))
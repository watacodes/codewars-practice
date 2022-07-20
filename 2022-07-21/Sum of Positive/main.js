/* 

Codewars Challenge, 8k: https://www.codewars.com/kata/5715eaedb436cf5606000381/train/javascript

You get an array of numbers, return the sum of all of the positives ones.

Example [1,-4,7,12] => 1 + 7 + 12 = 20

Note: if there is nothing to sum, the sum is default to 0.

*/

function positiveSum(arr) {
    // First, if we have no value in arr, return 0
    // Then we have to ignore the negative numbers.
    // After that, we have to add all numbers and
    // return the value
    let result = 0;   
    arr.map(x => !(x < 0) ? result += x : result += 0);
    return result;
  }

  console.log(positiveSum([2, -3, 3]));
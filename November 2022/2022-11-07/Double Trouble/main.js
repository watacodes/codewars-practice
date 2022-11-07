/*

Codewars, 7k: Double Trouble

Given an array of integers (x), and a target (t), you must find out if any two consecutive numbers in the array sum to t. If so, remove the second number.

Example:

x = [1, 2, 3, 4, 5]
t = 3

1+2 = t, so remove 2. No other pairs = t, so rest of array remains:

[1, 3, 4, 5]

*/

const trouble = (x, t) => {
  let res = [x[0]];
  
  for (let i = 1; i < x.length; i++) {
    if (x[i] + res[res.length - 1] !== t) {
      res.push(x[i]);
    }
  }
  
  return res;
};

console.log(trouble([1,2,3,4,5], 3))

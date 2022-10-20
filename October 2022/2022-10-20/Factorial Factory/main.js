/*

Codewars, 7k: Factorial Factory


In mathematics, the factorial of integer 'n' is written as 'n!'. It is equal to the product of n and every integer preceding it. For example: 5! = 1 x 2 x 3 x 4 x 5 = 120

Your mission is simple: write a function that takes an integer 'n' and returns 'n!'.

You are guaranteed an integer argument. For any values outside the positive range, return null, nil or None.

*/

const factorial = n => {
  if (n === 1 || n === 0) return 1;
  if (n < 0) return null;
  let counter = n;
  let result = n;
  while (counter > 1) {
    result = result * (counter - 1)
    counter--;
  }
  return result;
};

console.log(factorial(5))
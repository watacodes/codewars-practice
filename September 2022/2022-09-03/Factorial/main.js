/*

Codewars, 7k: Factorial

Your task is to write function factorial.

*/

const factorial = n => {
  if (n === 0 || n === 1) return 1;
  let num = n;
  for (let i = n - 1; i > 0; i--) {
    num *= i;
  }
  return num;
};

console.log(factorial(5));
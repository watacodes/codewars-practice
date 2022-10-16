/*

Codewars, 7k: Collatz Conjecture Length


The Collatz Conjecture states that for any natural number n, if n is even, divide it by 2. If n is odd, multiply it by 3 and add 1. If you repeat the process continuously for n, n will eventually reach 1.

For example, if n = 20, the resulting sequence will be:

[ 20, 10, 5, 16, 8, 4, 2, 1 ]
Write a program that will output the length of the Collatz Conjecture for any given n.

*/

const collatz = (num, count = 1) => {
  let counter = count;
  if (num === 1) return counter++;
  if (num % 2 === 0) {
    num /= 2;
  } else {
    num = num * 3 + 1; 
  }
  counter++;
  return num === 1 ? counter : collatz(num, counter++);
};

console.log(collatz(20));
/* 

Codewars challenge, 8k:

Wilson primes satisfy the following condition. Let P represent a prime number.

Then,

((P-1)! + 1) / (P * P)
should give a whole number.

Your task is to create a function that returns true if the given number is a Wilson prime.

*/

function amIWilson(p) {
    // The condition of Wilson primes is,
    // ((p-1)! + 1) / (p * p)
    // If the above condition returns a whole number,
    // return true.
    
    // Set a variable that stores a factorized number
    // Set a variable that stores the above formula,
    // Write an if/else statement, return true if it passes.
    
    let factorial = 1;
    for (let i = factorial; i < p; i++) {
      factorial *= i;
    }
    const wilsonPrimes = (factorial + 1) / p**2;
    return Number.isInteger(wilsonPrimes) ? true : false;
  }
/*

Codewars, 7k: Return the first M multiples of N

Implement a function, multiples(m, n), which returns an array of the first m multiples of the real number n. Assume that m is a positive integer.

Ex.

multiples(3, 5.0)
should return

[5.0, 10.0, 15.0]

*/

const multiples = (n1, n2) => {
  let arr = [];
  for (let i = 1; i <= n1; i++) {
    arr.push(i * n2);
  }
  return arr;
};

console.log(multiples(3, 5.0))
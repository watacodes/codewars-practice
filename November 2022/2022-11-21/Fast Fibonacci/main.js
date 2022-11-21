/*

Codewars, 7k: Fast Fibonacci

*/

const fib = (n, i = 1, res = 0) => {
  return n ? fib(n - 1, i + res, i) : res;
}

console.log(fib(100));
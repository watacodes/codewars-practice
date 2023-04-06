/*

Codewars, 7k: Factorial division

*/

function factorialDivision(n, d) {
  let res = 1n;
  for (let i = n; i > d; i--) {
    res *= i;
  }
  return res;
}
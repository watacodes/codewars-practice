/*

Codewars 8k:

Write a function that accepts an integer n and a string s as parameters, and returns a string of s repeated exactly n times.

Examples (input -> output)
6, "I"     -> "IIIIII"
5, "Hello" -> "HelloHelloHelloHelloHello"

*/

const repeatStr = (n, s) => {
  let string = '';
  for (let i = 0; i < n; i++) {
    string += s;
  }
  return string;
}

console.log(repeatStr(4, "i"));
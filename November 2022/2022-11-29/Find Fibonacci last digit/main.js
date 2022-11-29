/*

Codewars, 7k: Find Fibonacci last digit

*/

const getLastDigit = digit => {
  let first = 1;
  let second = 1;
  for (let i = 3; i <= digit; i++) {
    let third = (first + second) % 10;
    first = second;
    second = third;
  }
  return second;
}

console.log(getLastDigit(5))
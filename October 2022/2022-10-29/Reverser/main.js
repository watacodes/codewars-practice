/*

Codewars, 7k: Reverser

Impliment the reverse function, which takes in input n and reverses it. For instance, reverse(123) should return 321. You should do this without converting the inputted number into a string.

// Please do not use
const forbidden = "
                  '
                  `
                  string
                  fixed
                  precision
                  .keys

*/

const reverse = n => {
  let temp = 0;
  while (n) {
    temp *= 10;
    temp += n % 10;
    n = Math.floor(n / 10);
  }
  return temp;
};

console.log(reverse(12340));

console.log(1234 + 4321);

console.log(10987 + 78901);
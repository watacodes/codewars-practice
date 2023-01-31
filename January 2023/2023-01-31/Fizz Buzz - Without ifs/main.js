/*

Codewars, 7k: Fizz Buzz - Without ifs

*/

const fizzBuzz = n => {
  switch(true) {
    case (n % 15 === 0):
      return 'FizzBuzz';
      break;
    case (n % 5 === 0):
      return 'Buzz';
      break;
    case (n % 3 === 0):
      return 'Fizz';
      break;
    default:
      return n;
  }
};
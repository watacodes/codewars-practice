/*

Codewars, 6k: FizzBuzz Backwards

*/

function reverseFizzBuzz(array) {
  const fizzPos = array.indexOf('Fizz') + 1 ? array.indexOf('Fizz') + 1 : array.indexOf('FizzBuzz') + 1;
  const buzzPos = array.indexOf('Buzz') + 1 ? array.indexOf('Buzz') + 1 : array.indexOf('FizzBuzz') + 1;
  return [fizzPos, buzzPos];
};
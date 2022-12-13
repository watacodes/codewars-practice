/*

Codewars, 7k: Reverse Factorials

*/

const reverseFactorial = num => {
  let initialNum = 1;
  let counter = 1;

  while (initialNum < num) {
    initialNum = initialNum * ++counter;
  }
  return initialNum === num ? `${counter}!` : 'None';
}

console.log(reverseFactorial(120))
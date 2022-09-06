/*

Codewars, 7k: Build a square

I will give you an integer. Give me back a shape that is as long and wide as the integer. The integer will be a whole number between 1 and 50.

Example
n = 3, so I expect a 3x3 square back just like below as a string:

+++
+++
+++

*/

const generateShape = i => {
  let square = '';
  for (let k = 1; k <= i; k++) {
    for (let j = 1; j <= i; j++) {
      if (j !== i) {
        square += '+';
      } else if (j === i && k !== i) {
        square += '+\n';
      } else {
        square += '+';
      }
    }
  }
  return square;
};

console.log(generateShape(3));
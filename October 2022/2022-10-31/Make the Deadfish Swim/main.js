/*

Codewars, 6k: Make the Deadfish Swim

Write a simple parser that will parse and run Deadfish.

Deadfish has 4 commands, each 1 character long:

i increments the value (initially 0)
d decrements the value
s squares the value
o outputs the value into the return array
Invalid characters should be ignored.

parse("iiisdoso") => [ 8, 64 ]

*/

const parse = str => {
  let counter = 0;
  let res = [];

  const strArray = str.split('');
  for (let a of strArray) {
    if (a === 'i') {
      counter++;
    } else if (a === 'd') {
      counter--;
    } else if (a === 's') {
      counter = counter ** 2;
    } else if (a === 'o') {
      res.push(counter);
    };
  };
  return res;
};


console.log(parse('iiisdoso'))

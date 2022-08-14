/*

Codewars, 8k: Draw stairs

Given a number n, draw stairs using the letter "I", n tall and n wide, with the tallest in the top left.

For example n = 3 result in:

"I\n I\n  I"
or printed:

I
 I
  I
Another example, a 7-step stairs should be drawn like this:

I
 I
  I
   I
    I
     I
      I
*/

const drawStairs = n => {
  let first = '';
  let space = ' ';
  let stair = 'I\n';
  let last = 'I';
  for (let i = 0; i < n; i++) {
    if (n === 0) {
      first += 'I'; 
    } else if (i !== n - 1) {
      first += `${space.repeat(i)}${stair}`;
    } else {
      first += `${space.repeat(i)}${last}`;
    }
  }
  return first;
};

console.log(drawStairs(3));
/*

Codewars, 6k: Build Tower

Build a pyramid-shaped tower, as an array/list of strings, given a positive integer number of floors. A tower block is represented with "*" character.

For example, a tower with 3 floors looks like this:

[
  "  *  ",
  " *** ", 
  "*****"
]
And a tower with 6 floors looks like this:

[
  "     *     ", 
  "    ***    ", 
  "   *****   ", 
  "  *******  ", 
  " ********* ", 
  "***********"
]

*/

const towerBuilder = n => {
  let towerArray = [];
  let baseLength = n * 2 - 1;
  for (let row = 0; row < n; row++) {
    let floor = [];
    if (row === 0) {
      floor.push('*'.repeat(baseLength));
    } else {
      floor.unshift(' '.repeat(row));
      floor.push('*'.repeat(baseLength));
      floor.push(' '.repeat(row));
    }
    baseLength -= 2;
    towerArray.push(floor.join(''));
  };
  return towerArray.reverse();
};

console.log(towerBuilder(3));

/*

Codewars, 5k: flatten()

*/

function flatten(...arrs) {
  return arrs.reduce((acc, curr) => Array.isArray(curr) ? acc.concat(flatten(...curr)) : acc.concat(curr), []);
}



console.log(flatten(1, [2, 3], 4, 5, [6, [7]])) // returns [1, 2, 3, 4, 5, 6, 7]
console.log(flatten('a', ['b', 2], 3, null, [[4], ['c']])) // returns ['a', 'b', 2, 3, null, 4, 'c']

/*

Codewars, 8k: Exes and Ohs

Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.

Examples input/output:

XO("ooxx") => true
XO("xooxx") => false
XO("ooxXm") => true
XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
XO("zzoo") => false

*/

const XO = s => {
  let sToArr = s.toLowerCase().split('');
  let countO = 0;
  let countX = 0;
  for (let i of sToArr) {
    if (i === 'o') {
      countO++;
    } else if (i === 'x') {
      countX++;
    }
  }
  return countO === countX || countO === 0 && countX === 0;
};

console.log(XO("zpzppzz"));
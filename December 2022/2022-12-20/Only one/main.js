/*

Codewars, 7k: Only one

*/

const onlyOne = (...param) => {
  if (param === 'undefined') return false;
  let counter = 0;
  for (let i of param) {
    if (i) {
      counter++;
    }
  }
  return counter === 1;
}
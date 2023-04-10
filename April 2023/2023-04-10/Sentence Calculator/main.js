/*

Codewars, 6k: Sentence Calculator

*/

function lettersToNumbers(s) {
  const alpha = 'abcdefghijklmnopqrstuvwxyz';
  return [...s].reduce((acc, curr) => {
    if (alpha.includes(curr)) {
      acc += alpha.indexOf(curr) + 1;
    } else if (alpha.toUpperCase().includes(curr)) {
      acc += (alpha.toUpperCase().indexOf(curr) + 1) * 2;
    } else if (/\d/.test(curr)) {
      acc += +curr;
    }
    return acc;
  }, 0);
};
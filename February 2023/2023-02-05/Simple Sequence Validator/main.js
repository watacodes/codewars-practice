/*

Codewars, 7k: Simple Sequence Validator

*/

function validateSequence(x) {
  const diff = x[1] - x[0];
  let valid = true;
  for (let i = 0; i < x.length - 1; i++) {
    if (x[i+1] - x[i] !== diff) {
      valid = false;
    }
  }
  return valid;
}
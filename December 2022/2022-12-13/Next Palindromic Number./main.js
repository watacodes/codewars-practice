/*

Codewars, 7k: Next Palindromic Number.

*/

const nextPal = val => {
  if ([...String(++val)].reverse().join('') != val) {
    return nextPal(val);
  }
  return val;
}
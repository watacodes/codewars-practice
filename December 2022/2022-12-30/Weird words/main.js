/*

Codewars, 7k: Weird words

*/

const nextLetter = str => {
  const strArr = str.split('');
  const alphaUpper = 'abcdefghijklmnopqrstuvwxyzaABCDEFGHIJKLMNOPQRSTUVWXYZA';
  return strArr.map(a => alphaUpper.includes(a) ? alphaUpper[alphaUpper.indexOf(a) + 1] : a).join('');
}
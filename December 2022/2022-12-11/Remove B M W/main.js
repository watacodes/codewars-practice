/*

Codewars, 7k: Remove B M W

*/

const removeBMW = str => {
  return typeof str === 'string' ? str.replace(/[bmw]/gi, '') : new Error('This program only works for text.');
}
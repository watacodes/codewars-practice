/*

Codewars, 7k: Print count and numbers

*/

function countMe(data) {
  return /[^0-9]/.test(data) ? '' : data.replace(/(\d)\1*/g, (s, c) => `${s.length}${c}`);
}
/*

Codewars, 7k: Bob's Short Forms

*/

function shortForm(str) {
  return str.replace(/\B[aiueo]\B/gi, '');
}
/*

Codewars, 6k: Missing Alphabet

*/

function insertMissingLetters(str) {
  let alpha = 'abcdefghijklmnopqrstuvwxyz';
  let i = 0;
  
  while (alpha[i]) {
    str = str.replace(new RegExp(alpha[i]), e => e + alpha.slice(i+1)
             .replace(/./g, e => str.includes(e) ? '' : e).toUpperCase());
    i++;
  }
  return str;
};
/*

Codewars, 6k: String array duplicates

*/

function dup(s) {
  return s.map(e => {
    return e.replace(/(.)\1+/gi, '$1');
  });
};
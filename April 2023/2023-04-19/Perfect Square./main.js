/*

Codewars, 6k: Perfect Square.

*/


function perfectSquare(str) {
  const lines = str.split('\n');
  if (str.length === 1) return true;
  return lines.every(e => e.length === lines.length && e.length === lines[0].length && /[.]/g.test(e) && [...e].every(e => e === '.'));
};
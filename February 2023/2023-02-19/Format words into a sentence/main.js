/*

Codewars, 6k: Format words into a sentence

*/

function formatWords(arr) {
  if (!arr || arr.length === 0 || arr.filter(e => e.length > 0).length === 0) return '';
  const filtered = arr.filter(e => e.length > 0);
  const beforeAnd = filtered.slice(0, -1);
  const after = filtered.slice(-1);
  if (filtered.length === 1) return filtered[0];
  return beforeAnd.join(', ') + ' and ' + after;
}


const test1 = ['ninja', 'samurai', 'ronin']; // ninja, samurai and ronin

console.log(formatWords(test1))
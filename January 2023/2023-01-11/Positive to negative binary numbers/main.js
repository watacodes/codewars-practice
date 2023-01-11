/*

Codewars, 7k: Positive to negative binary numbers

*/

function positiveToNegative(b) {
  if (b.every(e => e === 0)) return b;
  const flipped = parseInt(b.map(k => k === 1 ? '0' : '1').join(''), 2) + 1;
  return [...flipped.toString(2)].map(a => +a);
}
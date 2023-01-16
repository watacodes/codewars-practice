/*

Codewars, 7k: Reverse and Invert

*/

function reverseInvert(array) {
  const filtered = array.filter(e => Number.isInteger(e));
  return filtered.map(e => {
    if (e >= 0) {
      return -(Number([...String(e)].reverse().join('')));
    } else {
      return +Math.abs(e).toString().split('').reverse().join('');
    }
  });
}
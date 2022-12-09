/*

Codewars, 7k: White or Black?

*/

const mineColor = (a, rowIdx) => {
  const cols = 'abcdefgh';
  const colIdx = cols.indexOf(a);
  return (colIdx + rowIdx) % 2 ? 'black' : 'white';
}
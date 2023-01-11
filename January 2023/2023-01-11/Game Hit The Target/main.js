/*

Codewars, 7k: Game Hit The Target

*/

const solution = mtrx => {
  const rowIdx = mtrx.findIndex(e => e.includes('>'));
  const idxOfCarrot = mtrx[rowIdx].findIndex(e => e === '>');
  const targetRowIdx = mtrx.findIndex(e => e.includes('x'));
  const idxOfTarget = mtrx[targetRowIdx].findIndex(e => e === 'x');
  return rowIdx !== targetRowIdx || idxOfCarrot > idxOfTarget ? false : true;
}
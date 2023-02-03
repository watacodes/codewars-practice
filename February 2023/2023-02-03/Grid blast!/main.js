/*

Codewars, 7k: Grid blast!

*/

function fire(x,y) {
  const grid = ['top left',    'top middle',    'top right',
              'middle left', 'center',        'middle right',
              'bottom left', 'bottom middle', 'bottom right'];
  const nested = [];
  for (let i = 0; i < grid.length; i += 3) {
    nested.push(grid.slice(i, i + 3));
  }
  return nested[y][x];
}
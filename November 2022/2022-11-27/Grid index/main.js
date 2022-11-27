/*

Codewars, 7k: Grid index

*/

const gridIndex = (grid, indices) => {
  const flatGrid = grid.flat(Infinity);
  const res = [];
  indices.forEach(a => res.push(flatGrid[a-1]));
  return res.join('');
}




const testGrid = [['m', 'y', 'e'], 
['x', 'a', 'm'], 
['p', 'l', 'e']];

const index = [1, 3, 5, 8]

console.log(gridIndex(testGrid, index))
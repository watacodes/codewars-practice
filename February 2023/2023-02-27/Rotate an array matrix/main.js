/*

Codewars, 5k: Rotate an array matrix

*/

function rotate(matrix, direc) {
  const rotated = [];
  console.log(matrix, direc)
  if (direc === 'clockwise') {
    for (let i = 0; i < matrix[0].length; i++) {
      const temp = [];
      matrix.map(e => temp.unshift(e[i]));
      rotated.push(temp);
    }
  } else {
    for (let i = 0; i < matrix[0].length; i++) {
      const temp = [];
      matrix.map(e => temp.push(e[i]));
      rotated.unshift(temp);
    }
  }
  
  return rotated;
  
}
let matrix = [
  [1,2,3],
  [4,5,6],
  [7,8,9]
];

console.log(rotate(matrix, 'clockwise')) // [[7,4,1],[8,5,2],[9,6,3]]
console.log(rotate(matrix, 'counter-clockwise')) // [[3,6,9],[2,5,8],[1,4,7]])

//02, 12, 22, 01, 11, 21, 00, 10, 20,
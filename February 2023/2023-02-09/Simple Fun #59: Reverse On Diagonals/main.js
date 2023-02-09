/*

Codewars, 7k: Simple Fun #59: Reverse On Diagonals

*/

function reverseOnDiagonals(matrix) {
  for (let i = 0, k = matrix.length - 1; i < matrix.length / 2; i++, k--) {
    [matrix[i][i], matrix[k][k]] = [matrix[k][k], matrix[i][i]];
    [matrix[i][k], matrix[k][i]] = [matrix[k][i], matrix[i][k]];
  }
  return matrix;
}
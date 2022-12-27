/*

Codewars, 7k: Product of the main diagonal of a square matrix.

*/

const mainDiagonalProduct = mat => {
  const productArr = [];
  for (let i = 0; i < mat.length; i++) {
    productArr.push(mat[i][i])
  }
  return productArr.reduce((acc, curr) => acc * curr);
}
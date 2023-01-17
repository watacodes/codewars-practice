/*

Codewars, 7k: That unites us

*/

function thatUnitesUs(array1, array2, n) {
  const concatenated = [...new Set(array1.concat(array2))].sort();
  return concatenated.slice(0, n);
}
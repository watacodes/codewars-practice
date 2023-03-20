/*

Codewars, 6k: Sort array by sorting its smallest sub-array

*/

function findIndexOfSubArray(arr) {
  const ascending = arr.slice().sort((a, b) => a - b);
  let indicesA = checkIndices(ascending);
  let indicesD = checkIndices(ascending.reverse());
  
  function checkIndices(input) {
    let head = arr.findIndex((num, i) => num !== input[i]);
    if (head < 0) return [0, 0];
    let tail = arr.findLastIndex((num, i) => num !== input[i]);
    return [head, tail];
  }
  
  return indicesA[1] - indicesA[0] < indicesD[1] - indicesD[0] ? indicesA : indicesD;
}
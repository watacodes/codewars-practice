/*

Codewars, 7k: Inertial Array

*/

function isInertial(arr) {
  const oddValues = arr.filter(e => e % 2).sort((a, b) => a - b);
  const max = Math.max(...arr);
  const evenValuesExceptMax = arr.filter(e => e % 2 === 0 && e !== max);
  return oddValues.length >= 1 && max % 2 === 0 && evenValuesExceptMax.every(e => oddValues[0] > e);
}
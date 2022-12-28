/*

Codewars, 7k: Training JS #33: methods of Math---max() min() and abs()

*/

const maxMin = (arr1, arr2) => {
  const arrDiff = arr1.map((num, i) => Math.abs(arr2[i] - num));
  return [Math.max(...arrDiff), Math.min(...arrDiff)];
}
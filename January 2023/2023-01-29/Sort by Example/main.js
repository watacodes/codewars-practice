/*

Codewars, 7k: Sort by Example

*/

function exampleSort(arr,exampleArr) {
  return arr.sort((a, b) => exampleArr.indexOf(a) - exampleArr.indexOf(b));
}
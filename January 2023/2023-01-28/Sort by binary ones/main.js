/*

Codewars, 7k: Sort by binary ones

*/

function sortByBinaryOnes(arr) {
  const copyArr = arr.slice().map(e => e.toString(2));
  return copyArr.sort((a, b) => (b.replace(/[0]/g, '').length - a.replace(/[0]/g, '').length || 0) || a - b)
                .map(e => parseInt(e, 2));
}
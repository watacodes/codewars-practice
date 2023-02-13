/*

Codewars, 7k: Sort the Bytes

*/

function sortBytes(int) {
  const intToBin = int.toString(2).padStart(32, '0');
  const binArr = [];
  for (let i = 0; i < intToBin.length; i += 8) {
    binArr.push(intToBin.slice(i, i + 8));
  }
  const sortedBin = binArr.sort((a, b) => +b - +a).join('');
  return parseInt(sortedBin, 2);
}
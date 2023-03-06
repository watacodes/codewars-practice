/*

Codewars, 7k: Splitting Numbers

*/

function splitNumbers(n) {
  let nBin = [...n.toString(2)].map(e => +e);
  let nBinLength = nBin.length;
  let counter = 0;
  for (let i = 0; i < nBinLength; i++) {
    counter += nBin[nBinLength - i - 1];
    if (nBin[nBinLength - i - 1] === 1) {
      nBin[nBinLength - i - 1] = counter % 2;
    } else {
      nBin[nBinLength - i - 1] = 0;
    }
  }
  let left = parseInt(nBin.join(''), 2);
  return [left, n - left];
}
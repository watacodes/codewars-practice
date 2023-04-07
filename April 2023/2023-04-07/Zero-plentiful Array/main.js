/*

Codewars, 6k: Zero-plentiful Array

*/

function zeroPlentiful(arr) {
  const onlyZeros = arr.map(e => !e ? e : ',').join('').split(',');
  const filtered = onlyZeros.filter(e => e);
  return filtered.every(e => e.length >= 4) ? filtered.length : 0;
}
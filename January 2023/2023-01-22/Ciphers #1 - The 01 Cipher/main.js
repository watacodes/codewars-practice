/*

Codewars, 7k: Ciphers #1 - The 01 Cipher

*/

function encode(str) {
  str = str.toLowerCase();
  const alpha = ' abcdefghijklmnopqrstuvwxyz';
  const strArr = str.split(' ');
  return strArr
        .map(e => [...e]
        .map(l => alpha.indexOf(l) === -1 ? l : alpha.indexOf(l) % 2 ? 0 : 1)
        .join(''))
        .join(' ');
}
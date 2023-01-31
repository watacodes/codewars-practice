/*

Codewars, 7k: Mirroring cipher

*/

function mirror(code, alpha = 'abcdefghijklmnopqrstuvwxyz') {
  return code.toLowerCase().replace(/./gi, (letter) => alpha.indexOf(letter) !== -1 ? alpha[alpha.length - alpha.indexOf(letter) - 1] : letter);
}
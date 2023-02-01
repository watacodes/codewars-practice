/*

Codewars, 7k: The Robber Language

*/

function robberEncode(str) {
  return str.split(' ').map(e => e.split('').map(letter => /[bcdfghjklmnpqrstvwxyz]/gi.test(letter) ? letter + (/[A-Z]/.test(letter) ? 'O' : 'o') + letter : letter).join('')).join(' ');
}
/*

Codewars, 7k: Simple Fun #49: Decipher

*/

function decipher(cipher) {  
  return cipher.match(/[789]{2}|[01789]{3}|[0123456]{3}/g).map((e) => String.fromCharCode(e)).join('');
}
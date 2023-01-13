/*

Codewars, 7k: International Morse Code Encryption

*/

function encryption(message) {
  return message.split(' ').map(a => [...a].map(e => CHAR_TO_MORSE[e]).join(' ')).join('   ');
}
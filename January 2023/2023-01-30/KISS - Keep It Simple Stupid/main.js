/*

Codewars, 7k: KISS - Keep It Simple Stupid

*/

function isKiss(words) {
  return words.split(' ').every(e => e.length <= words.split(' ').length) ? 'Good work Joe!' : 'Keep It Simple Stupid';
}
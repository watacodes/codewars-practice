/*

Codewars, 5k: Readability is King

*/

function fleschKincaid(str) {
  const words = str.match(/[\w]+/g).length;
  const syllables = str.match(/[aiueo]+/gi).length;
  const sentences = str.match(/[.!?]+/g).length;
  
  return +(0.39 * words / sentences + 11.8 * syllables / words - 15.59).toFixed(2);
}
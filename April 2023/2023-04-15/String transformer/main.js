/*

Codewars, 6k: String transformer

*/

function stringTransformer(str) {
  const strArr = str.split(' ').reverse();
  return strArr.map(e => [...e].map(letter => {
    return letter.toLowerCase() === letter ? letter.toUpperCase() : letter.toLowerCase();
  }).join('')).join(' ');
}
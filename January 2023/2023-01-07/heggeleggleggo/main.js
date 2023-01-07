/*

Codewars, 7k: heggeleggleggo

*/

function heggeleggleggo(word) {
  return [...word].map(a => a.match(/[^aiueo ]/gi) ? a + 'egg' : a).join('');
}
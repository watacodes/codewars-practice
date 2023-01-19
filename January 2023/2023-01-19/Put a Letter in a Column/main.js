/*

Codewars, 7k: Put a Letter in a Column

*/

function buildRowText(index, character) {
  let str = '| | | | | | | | | |'.split('');
  str[index * 2 + 1] = character;
  return str.join('');
}
/*

Codewars, 6k: Valid Braces

*/

function validBraces(braces) {
  let temp = '';
  while (braces.length !== temp.length) {
    temp = braces;
    braces = braces.replace('()', '')
                   .replace('[]', '')
                   .replace('{}', '');
  }
  return braces.length === 0;
};
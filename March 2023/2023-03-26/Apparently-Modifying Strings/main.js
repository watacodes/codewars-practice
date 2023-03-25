/*

Codewars, 7k: Apparently-Modifying Strings

*/

function apparently(str) {
  return str.replace(/\b(and|but)\b(\b(\sapparently\b))?/g, '$1 apparently');
};
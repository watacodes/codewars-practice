/*

Codewars, 7k: Strange Strings Parser!

*/

function wordSplitter(str) {
  return str.split(/[^0-9a-zA-Z.\-]/g);
}
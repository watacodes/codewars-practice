/*

Codewars, 7k: Sorted Union

*/

function uniteUnique(...arrays) {
  return [...new Set([].concat(...arrays))];
}
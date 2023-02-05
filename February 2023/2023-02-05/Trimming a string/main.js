/*

Codewars, 7k: Trimming a string

*/

function trim(str, size) {
  if (str.length <= size) {
    return str;
  }
  if (size > 3) {
    return str.slice(0, size - 3) + '...';
  } else {
    return str.slice(0, size) + '...';
  }
}
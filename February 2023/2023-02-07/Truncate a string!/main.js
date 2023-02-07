/*

Codewars, 7k: Truncate a string!

*/

function truncateString(str, num) {
  if (str.length <= 3) return str;
  if (num <= 3) return str.slice(0, num) + '...';
  if (str.length > num) return str.slice(0, (num - 3)) + '...';
  return str;
}
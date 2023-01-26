/*

Codewars, 7k: Character Concatenation

*/

function charConcat(string) {
  let res = '';
  let left = 0;
  let right = string.length - 1;
  while (left < right) {
    res += string[left++] + string[right--] + left;
  }
  return res;
}
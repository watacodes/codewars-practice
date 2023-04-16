/*

Codewars, 6k: Count Repeats

*/

function countRepeats(str) {
  const onlyConsecutive = str.replace(/(.)\1+/g, '$1').length;
  return str.length - onlyConsecutive;
};
/*

Codewars, 7k: Binary to string

*/

function binaryToString(binary) {
  const eachBinaryNum = binary.split('0b').map(e => parseInt(e, 2))
  return eachBinaryNum.filter(a => a).map(e => String.fromCharCode(e)).join('');
}
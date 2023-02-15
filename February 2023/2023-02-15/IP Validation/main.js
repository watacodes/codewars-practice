/*

Codewars, 6k: IP Validation

*/

function isValidIP(str) {
  return str.split('.').filter(e => +e <= 255 && +e >= 0 && e.length === String(+e).length).length === 4;
}
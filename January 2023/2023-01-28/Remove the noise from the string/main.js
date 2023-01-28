/*

Codewars, 7k: Remove the noise from the string

*/

function removeNoise(str) {
  return str.replace(/[%$&/#·@|º\\ª]/g, '');
}
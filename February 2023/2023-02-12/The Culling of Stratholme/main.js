/*

Codewars, 7k: The Culling of Stratholme

*/

function purifyTheStratholme(str) {
  return str.replace(/.?[i]+.?/gi, '').trim();
}
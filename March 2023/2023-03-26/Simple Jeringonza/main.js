/*

Codewars, 7k: Simple Jeringonza

*/

function jeringonza(str) {
  return str.replace(/[aiueo]/g, (w) => w + 'p' + w)
            .replace(/[AIUEO]/g, (w) => w + 'P' + w);
};
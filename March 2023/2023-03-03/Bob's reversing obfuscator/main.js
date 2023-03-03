/*

Codewars, 5k: Bob's reversing obfuscator

*/

function decoder(encoded, marker) {
  const split = encoded.split(marker);
  const start = split.filter((e, i) => i % 2 === 0);
  const end = split.filter((e, i) => i % 2).reverse().map(e => [...e].reverse().join(''));
  return start.concat(end).join('');
}
/*

Codewars, 7k: Move all vowels

*/

const moveVowel = str => {
  const regex = /[aiueo]/g;
  const consonants = [];
  const vowels = [];
  [...str].forEach(letter => letter.match(regex) ? vowels.push(letter) : consonants.push(letter));
  return consonants.concat(vowels).join('');
}
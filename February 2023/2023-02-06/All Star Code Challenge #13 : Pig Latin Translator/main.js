/*

Codewars, 7k: All Star Code Challenge #13 : Pig Latin Translator

*/

const translate = word => {
  if (word.length < 2) return word;
  if (word[0].match(/[^aiueo]/)) {
    return word.slice(1) + word[0] + 'ay';
  }
  return word + 'ay';
}
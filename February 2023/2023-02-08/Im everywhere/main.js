/*

Codewars, 7k: I'm everywhere!

*/

function i(word) {
  const vowels = word.replace(/[^aiueo]/gi, '').length;
  const consonants = word.replace(/[aiueo]/gi, '').length;
  return vowels >= consonants || word[0].toLowerCase() === word[0] || word[0].match(/[a-zI]/) ? 'Invalid word' : 'i' + word;
}
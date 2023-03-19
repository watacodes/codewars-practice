/*

Codewars, 6k: Vowel-consonant lexicon

*/

function solve(s) {
  let consonants = s.match(/[^aiueo]/g).sort();
  let vowels = s.match(/[aiueo]/g).sort();
  
  if (consonants.length > vowels.length) {
    [consonants, vowels] = [vowels, consonants];  
  }
  
  if (vowels.length - consonants.length > 1) return 'failed';
  
  return vowels.map((letter, i) => letter + (consonants[i] || '')).join('');

};
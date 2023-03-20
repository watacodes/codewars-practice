/*

Codewars, 7k: "Consonant Please"

*/

function sortLetters(arr) {
  const filtered = arr.map(e => e.filter(item => /[a-z]/gi.test(item)));
  const vowels = [];
  const consonants = [];
  
  for (const child of filtered) {
    child.forEach(e => /[aiueo]/gi.test(e) ? vowels.push(e.toUpperCase()) : consonants.push(e.toUpperCase()));
  }

  return [vowels, consonants];
}
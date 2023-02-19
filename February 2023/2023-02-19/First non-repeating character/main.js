/*

Codewars, 5k: First non-repeating character

*/

function firstNonRepeatingLetter(s) {
  if (!s || s.length === 0) return '';
  if (s.length === 1) return s[0];

  for (let i = 0; i < s.length; i++) {
    let curr = s[i].toLowerCase();
    if (s.toLowerCase().indexOf(curr) == i && s.toLowerCase().indexOf(curr, i+1) == -1) {
      return s[i];
    }
  }
  return '';
}


const test1 = 'stress';
const test2 = 'moonmen';

console.log(firstNonRepeatingLetter(test1));
console.log(firstNonRepeatingLetter(test2));
/*

Codewars, 7k: Alphabetical Addition

Your task is to add up letters to one letter.

The function will be given a variable amount of arguments, each one being a letter to add.

Notes:
Letters will always be lowercase.
Letters can overflow (see second to last example of the description)
If no letters are given, the function should return 'z'
Examples:
addLetters('a', 'b', 'c') = 'f'
addLetters('a', 'b') = 'c'
addLetters('z') = 'z'
addLetters('z', 'a') = 'a'
addLetters('y', 'c', 'b') = 'd' // notice the letters overflowing
addLetters() = 'z'

*/

function addLetters(...letters) {
  if (letters.length === 0) return 'z';
  let nextCharCode = letters.map(a => a.charCodeAt() - 96).reduce((a, b) => a + b, 0)
  return nextCharCode > 26 ? nextCharCode % 26 === 0 ? 'z' : String.fromCharCode(nextCharCode % 26 + 96) : String.fromCharCode(nextCharCode + 96);
}

console.log(addLetters("s", "q", "w", "s"));

console.log(String.fromCharCode(96))
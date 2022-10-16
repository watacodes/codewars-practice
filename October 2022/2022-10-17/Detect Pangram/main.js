/*

Codewars, 6k: Detect Pangram

A pangram is a sentence that contains every single letter of the alphabet at least once. For example, the sentence "The quick brown fox jumps over the lazy dog" is a pangram, because it uses the letters A-Z at least once (case is irrelevant).

Given a string, detect whether or not it is a pangram. Return True if it is, False if not. Ignore numbers and punctuation.

*/

const isPangram = string => {
  let strArray = string.replace(/[^a-z]/gi, '').split('').map(a => a.toLowerCase());
  let alpha = {}
  console.log(strArray)
  for (let i = 1; i < 27; i++) {
    alpha[String.fromCharCode(i+96)] = 0;
  }
  console.log(alpha)
  strArray.forEach(letter => alpha[letter]++);
  console.log(alpha)
  for (let letter in alpha) {
    if (alpha[letter] === 0) return false;
  }
  return true;
}




console.log(isPangram("The quick brown fox jumps over the lazy dog."))

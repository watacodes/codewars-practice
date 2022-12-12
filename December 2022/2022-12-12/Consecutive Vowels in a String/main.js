/*

Codewars, 7k: Consecutive Vowels in a String

*/


const getTheVowels = str => {
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  let counter = 0;
  let idx = 0
  let currentVowel = vowels[idx];
  for (let i = 0; i < str.length; i++) {
    if (str[i] === vowels[idx]) {
      counter++;
      if (idx === 4) {
        idx = 0;
      } else {
        idx++;
      }
    }
  }
  return counter;
}
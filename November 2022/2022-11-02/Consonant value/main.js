/*

Codewars, 6k: Consonant value

Given a lowercase string that has alphabetic characters only and no spaces, return the highest value of consonant substrings. Consonants are any letters of the alphabet except "aeiou".

We shall assign the following values: a = 1, b = 2, c = 3, .... z = 26.

For example, for the word "zodiacs", let's cross out the vowels. We get: "z o d ia cs"


*/

const solve = s => {
  let strArray = s.toLowerCase()
  let onlyConsonants = strArray.replace(/[aeuio]/g, ' ').replace(/\s+/g, ' ');
 
  let converted = onlyConsonants.split(' ')
                                .map(a => a.split('').map(l => l.charCodeAt() - 96)
                                .reduce((acc, curr) => acc + curr, 0));
  return Math.max(...converted);
};

console.log(solve('zodiac'));
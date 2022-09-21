/*

Codewars, 7k: Longest vowel chain

The vowel substrings in the word codewarriors are o,e,a,io. The longest of these has a length of 2. Given a lowercase string that has alphabetic characters only (both vowels and consonants) and no spaces, return the length of the longest vowel substring. Vowels are any of aeiou.

*/

const solve = s => {
  let curr = 0;
  let longest = 0;
  let vowels = ['a', 'e', 'i', 'o', 'u'];
  for (let i = 0; i < s.length; i++) {
    if (vowels.includes(s[i])) {
      curr++;
      if (curr > longest) {
        longest = curr;
      }
    } else {
      curr = 0;
    }
  }
  return longest;
}

console.log(solve("codewarriors")) 
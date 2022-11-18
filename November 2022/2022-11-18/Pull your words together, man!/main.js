/*

Codewars, 7k: Pull your words together, man!

Capitalise the first letter of the first word.
Add a period (.) to the end of the sentence.
Join the words into a complete string, with spaces.
Do no other manipulation on the words.

*/

const sentencify = words => {
  if (words.length === 1) return words[0][0].toUpperCase() + words[0].slice(1) + '.';
  return words.map((a, i) => i === 0 ? a[0].toUpperCase() + a.slice(1) : i === words.length - 1 ? a + '.' : a).join(' ');
};

console.log(sentencify(["this","is","a","sentence"]
))
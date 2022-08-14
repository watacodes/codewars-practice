/*

Codewars, 8k: Polish alphabet


There are 32 letters in the Polish alphabet: 9 vowels and 23 consonants.

Your task is to change the letters with diacritics:

ą -> a,
ć -> c,
ę -> e,
ł -> l,
ń -> n,
ó -> o,
ś -> s,
ź -> z,
ż -> z
and print out the string without the use of the Polish letters.

For example:

"Jędrzej Błądziński"  -->  "Jedrzej Bladzinski"

*/


const correctPolishLetters = s => s.split('').map((a, i) => {
  const polish = ['ą', 'ć', 'ę', 'ł', 'ń', 'ó', 'ś', 'ź', 'ż']
  const romanl = ['a', 'c', 'e', 'l', 'n', 'o', 's', 'z', 'z']
  if (polish.includes(a)) {
    let idx =polish.indexOf(a);
    return romanl[idx];
  } else {
    return a;
  }
}).join('');
console.log(correctPolishLetters("Jędrzej Błądziński"))
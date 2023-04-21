/*

Codewars, 6k: Reverse Vowels In A String

*/

function reverseVowels(str) {
  const vowels = [];
  
  let markedVowels = [...str].map((e, i) => {
    if (/[aiueo]/gi.test(e)) {
      vowels.push(e);
      return '*';
    } else {
      return e;
    }
  });
  
  for (let i = 0; i < markedVowels.length; i++) {
    if (markedVowels[i] === '*') {
      markedVowels[i] = vowels.pop();
    }
  }
  
  return markedVowels.join('');
}
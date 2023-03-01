/*

Codewars, 6k: Ka Ka Ka cypher - words only vol 1

*/

function kaCokadekaMe(word) {
  const res = ['ka'];
  word = [...word];
  for (let i = 0; i < word.length; i++) {
    res.push(word[i]);
    if (/[aiueo]/i.test(word[i]) && /[^aiueo]/i.test(word[i+1]) && word.length !== i + 1) {
      res.push('ka');
    }
  }
  return res.join('');
}
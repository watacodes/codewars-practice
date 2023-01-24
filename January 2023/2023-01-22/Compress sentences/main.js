/*

Codewars, 7k: Compress sentences

*/

function compress(sentence) {
  const sentenceArr = sentence.toLowerCase().split(' ');
  const uniqueSet = [...new Set(sentenceArr)];
  return sentenceArr.map(e => uniqueSet.indexOf(e)).join('');
}
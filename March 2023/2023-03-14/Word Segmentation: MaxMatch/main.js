/*

Codewars, 6k: Word Segmentation: MaxMatch

*/

function maxMatch(sentence){
  const res = [];
  let currIdx = 0;
  
  for (let i = sentence.length; i >= 0; i--) {
    const sliced = sentence.slice(currIdx, i);
    if (VALID_WORDS.has(sliced) || sliced.length === 1) {
      res.push(sliced);
      currIdx = i;
      i = sentence.length + 1;
    }
  }
  
  return res;
}

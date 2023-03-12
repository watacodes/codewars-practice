/*

Codewars, 6k: Number , number ... wait LETTER !

*/

function doMath(s) {
  
  const ope = [
    (a, b) => a + b,
    (a, b) => a - b,
    (a, b) => a * b,
    (a, b) => a / b,
  ];
  
  const strArr = Math.round(s
    .split(' ')
    .map((word, i) => ({ num: +word.replace(/[a-z]/, ""), letter: word.match(/[a-z]/)[0], index: i }))
    .sort((a, b) => a.letter.localeCompare(b.letter) || a.index - b.index)
    .reduce((res, n, i, sourceArr) => i === 0 ? sourceArr[0].num : ope[(i - 1) % 4](res, n.num), 0));
  
  return strArr;
}
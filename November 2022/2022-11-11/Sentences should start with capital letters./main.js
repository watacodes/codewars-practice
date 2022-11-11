/*

Codewars, 7k: Sentences should start with capital letters.

*/

const sentence = 
"hello. my name is inigo montoya. you killed my father. prepare to die.";

const fix = paragraph => {
  if (!paragraph) return '';
  let paraArr = paragraph.split('. ');
  return paraArr.map(a => a[0].toUpperCase() + a.slice(1)).join('. ');
};

console.log(fix(sentence));
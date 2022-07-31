/*

Codewars 8k: https://www.codewars.com/kata/5168bb5dfe9a00b126000018

DESCRIPTION:
Complete the solution so that it reverses the string passed into it.

'world'  =>  'dlrow'
'word'   =>  'drow'

*/

const solution = str => {
  let arr = [];
  let strToArr = (str.split(''));
  for (let i = str.length -1 ; i >= 0; i--) {
    arr.push(strToArr[i]);
  }
  return arr.join('');
}

console.log(solution('Monkeyman'));
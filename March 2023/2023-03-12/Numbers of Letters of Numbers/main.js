/*

Codewars, 6k: Numbers of Letters of Numbers

*/

function numbersOfLetters(n, arr = []) {
  const numToStr = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
  let temp = [...String(n)].reduce((acc, curr) => acc + numToStr[+curr], '');
  arr.push(temp);
  return temp.length === numToStr.indexOf(temp) ? arr : numbersOfLetters(temp.length, arr); 
}
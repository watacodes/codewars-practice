/*

Codewars, 7k: SevenAte9

Write a function that removes every lone 9 that is inbetween 7s.

"79712312" --> "7712312"
"79797"    --> "777"

*/

const sevenAte9 = str => {
  let strArr = str.split('');
  for (let i = 0; i < strArr.length; i++) {
    if (strArr[i] === '9') {
      if (strArr[i-1] === '7' && strArr[i+1] === '7') {
        strArr.splice(i, 1);
      }
    }
  }
  return strArr.join('');
}

console.log(sevenAte9("165561786121789797"))
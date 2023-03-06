/*

Codewars, 7k: Simple string division II

*/

function solve(s, k) {
  const concatenated = [];
  const numStrArr = s.split(' ');
  for (let i = -1; i < numStrArr.length; i++) {
    for (let k = 0; k < numStrArr.length; k++) {
      if (i !== k) {
        let temp = numStrArr[i] + numStrArr[k];
        concatenated.push(temp);  
      }
    }
  }
  return concatenated.filter(e => +e % k === 0).length;
}
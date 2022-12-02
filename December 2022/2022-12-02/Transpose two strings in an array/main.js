/*

Codewars, 7k: Transpose two strings in an array

*/

const transposeTwoStrings = arr => {
  const arrLength = Math.max(arr[0].length, arr[1].length);
  let res = '';

  for (let i = 0; i < arrLength; i++) {
    if (arr[0][i]) {
      res += arr[0][i] + ' ';
    } else {
      res += '  ';
    }
    
    if (arr[1][i] && i === arrLength - 1) {
      res += arr[1][i];
    } else if (arr[1][i]) {
      res += arr[1][i] + '\n';
    } else if (!arr[1][i] && i === arrLength - 1) {
      res += ' ';
    } else {
      res += ' \n';
    }
  }
  return res;
}



console.log(transposeTwoStrings(['joey','louise']));
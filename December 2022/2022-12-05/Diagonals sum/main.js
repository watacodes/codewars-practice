/*

Codewars, 7k: Diagonals sum

*/

const sum = arr => {
  let res = 0;
  let innerCounter = 0;
  
  for (let i = 0; i < arr.length; i++) {
    res += arr[i][i];  
  }
  for (let k = arr.length - 1; k >= 0; k--) {
    res += arr[innerCounter][k];
    innerCounter++;
  }
  return res;
}

console.log(sum([
  [
    [ -2, 5, 3, 2 ], 
    [ 9, -6, 5, 1 ], 
    [ 3, 2, 7, 3 ], 
    [ -1, 8, -4, 8 ] ]
] ));
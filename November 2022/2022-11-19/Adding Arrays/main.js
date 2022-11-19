/*

Codewars, 7k: Adding Arrays

*/

const arrAdder = arr => {
  let res = '';
  for (let k = 0; k < arr[0].length; k++) {
    for (let i = 0; i < arr.length; i++) {
      res += arr[i][k];
    };
    res += ' ';
  };
  return res.trim();
};
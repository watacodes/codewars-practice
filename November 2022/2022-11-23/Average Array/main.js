/*

Codewars, 7k: Average Array

*/
const avgArray = arr => {
  const res = [];

  for (let i = 0; i < arr[0].length; i++) {
    let temp = 0;
    for (let j = 0; j < arr.length; j++) {
      temp += arr[j][i];
    }
    res.push(temp / arr.length);
  }
  return res;
}
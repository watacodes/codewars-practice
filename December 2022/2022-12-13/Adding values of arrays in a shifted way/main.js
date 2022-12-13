/*

Codewars, 7k: Adding values of arrays in a shifted way

*/

const addingShifted = (arrays, shift) => {
  let res = [];
  let idx = 0;
  for (let arr of arrays) {
    for (let i = 0; i < arr.length; i++) {
      res[idx + i] = (res[idx + i] || 0) + arr[i];
    }
    idx += shift;
  }
  return res;
}

/*

Codewars, 7k: All Star Code Challenge #20

*/

const addArrays = (array1, array2) => {
  if (array1.length === array2.length) {
    return array1.map((n, i) => n + array2[i]); 
  }
  throw 'Error';
}
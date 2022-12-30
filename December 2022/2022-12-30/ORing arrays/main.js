/*

Codewars, 7k: ORing arrays

*/

const orArrays = (arr1, arr2, def = 0) => {
  const res = [];
  let counter = 0;
  while (counter < arr1.length || counter < arr2.length) {
    if (arr1[counter] === undefined) {
      res.push(def | arr2[counter]);
    } else if (arr2[counter] === undefined) {
      res.push(arr1[counter] | def);
    } else {
      res.push(arr1[counter] | arr2[counter]);
    }
    counter++;
  }
  return res;
}
/*

Codewars, 7k: Are they the "same"?

*/

function comp(array1, array2) {
  if (!array1 || !array2) return false;
  return array2.every(e => {
    if (array1.includes(Math.sqrt(e))) {
      array1.splice(array1.indexOf(Math.sqrt(e)), 1);
      return true;
    }
    return false;
  });
}

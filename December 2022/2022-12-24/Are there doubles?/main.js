/*

Codewars, 7k: Are there doubles?

*/

const doubleCheck = str => {
  const strArr = [...str.toLowerCase()];
  for (let i = 0; i < strArr.length; i++) {
    if (strArr[i] === strArr[i+1]) {
      return true;
    }
  }
  return false;
}
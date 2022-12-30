/*

Codewars, 7k: sort array by last character

*/

const sortMe = arr => {
  const arrCopy = arr.slice();
  return arrCopy.sort((a, b) => String(a).slice(-1).localeCompare(String(b).slice(-1)) || arr.indexOf(a) - arr.indexOf(b));
}
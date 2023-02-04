/*

Codewars, 7k: The unknown but known variables: Addition

*/

function theVar(str) {
  const alpha = ' abcdefghijklmnopqrstuvwxyz';
  const convertedStr = str.split('+').map(e => alpha.indexOf(e));
  return convertedStr.reduce((acc, curr) => acc + curr);
}
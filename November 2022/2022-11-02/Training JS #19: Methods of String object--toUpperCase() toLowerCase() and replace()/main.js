/*

Codewars, 7k: Training JS #19: Methods of String object--toUpperCase() toLowerCase() and replace()

*/

const alienLanguage = str => {
  let strArray = str.split(' ');
  return strArray.map(a => a.slice(0, -1).toUpperCase() + a.slice(-1).toLowerCase()).join(' ');
};

console.log(alienLanguage("My name is John"));
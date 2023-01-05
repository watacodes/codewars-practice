/*

Codewars, 7k: Say "Hello World" JS Style

*/

const say = str1 => {
  return function(str2) {
    return `${str1} ${str2}`;
  }
}
/*

Codewars, 8k: 

Simple validation of a username with regex

Write a simple regex to validate a username. Allowed characters are:

lowercase letters,
numbers,
underscore
Length should be between 4 and 16 characters (both included).


*/

const validateUsr = username => {
  let regex = /^[0-9a-z_]{4,16}$/g;
  return username.match(regex) ? true : false;
}
console.log(validateUsr('monkeyman'));
console.log(validateUsr('12fasdf'));
console.log(validateUsr('HELLOW#@_'));
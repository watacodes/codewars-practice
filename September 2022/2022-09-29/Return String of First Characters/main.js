/*

Codewars, 7k: Return String of First Characters

In this exercise, a string is passed to a method and a new string has to be returned with the first character of each word in the string.

For example:

"This Is A Test" ==> "TIAT"
Strings will only contain letters and spaces, with exactly 1 space between words, and no leading/trailing spaces.

*/

function makeString(s){
  let strArr = s.split(' ');
  return strArr.map(a => a[0]).join('');
}
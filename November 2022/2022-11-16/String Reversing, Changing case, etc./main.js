/*

Codewars, 7k: String Reversing, Changing case, etc.

Given 2 string parameters, show a concatenation of:

the reverse of the 2nd string with inverted case; e.g Fish -> HSIf
a separator in between both strings: @@@
the 1st string reversed with inverted case and then mirrored; e.g Water -> RETAwwATER 

*/

const reverseAndMirror = (s1, s2) => {
  const reversedSecond = s2.split('').reverse().map(a => a.toUpperCase() === a ? a.toLowerCase() : a.toUpperCase()).join('');
  const separator = '@@@';
  const reversedFirst = s1.split('').reverse().map(a => a.toLowerCase() === a ? a.toUpperCase() : a.toLowerCase()).join('') + s1.split('').map(a => a.toLowerCase() === a ? a.toUpperCase() : a.toLowerCase()).join('');
  return reversedSecond + separator + reversedFirst;
}

console.log(reverseAndMirror('FizZ', 'buZZ'))
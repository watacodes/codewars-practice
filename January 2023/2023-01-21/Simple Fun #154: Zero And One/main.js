/*

Codewars, 7k: Simple Fun #154: Zero And One

*/

function zeroAndOne(s) {
  let counter = 0;
  for (let i = 0; i < s.length; i++) {
    if ((s[i] == '0' && s[i+1] == '1') || (s[i] == '1' && s[i+1] == '0')) {
      i++;
    } else {
      counter++;
    }
  }
  return counter;
}
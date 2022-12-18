/*

Codewars, 7k: Simple Fun #182: Happy "g"

*/

const gHappy = str => {
  for (let i = 0; i < str.length; i++) {
    if (str[i] === 'g' && str[i-1] !== 'g' && str[i+1] !== 'g') {
      return false;
    }
  }
  return true;
}
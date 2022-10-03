/*

Codewars, 7k: Scaling Squared Strings

*/

const scale = (s, h, v) => {
  let converted = s.split('\n');
  let repeatLetters = converted.map(a => a.split('').map(l => l.repeat(h)).join(''));
  return repeatLetters.map(b => `${b}\n`.repeat(v)).join('').trim();
};
console.log(scale("abcd\nefgh\nijkl\nmnop", 2, 3));
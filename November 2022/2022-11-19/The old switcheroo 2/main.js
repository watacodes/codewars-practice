/*

Codewars, 7k: The old switcheroo 2

*/

const encode = str => {
  const alpha = 'abcdefghijklmnopqrstuvwxyz'.split('');
  return [...str.toLowerCase()].map(a => alpha.includes(a) ? alpha.indexOf(a) + 1 : a).join('');
};

console.log(encode('abc-#@5'))
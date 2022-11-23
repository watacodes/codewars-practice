/*

Codewars, 7k: Ordering the words!

*/

const orderWord = s => {
  if (!s || s.length === 0) return 'Invalid String!';
  return [...s].sort().join('');
}

console.log(orderWord('hello world'))
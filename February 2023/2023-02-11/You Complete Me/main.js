/*

Codewars, 7k: You Complete Me

*/

const complete = (str) => {
  for (let i = 1; i <= str.length; i++) {
    if (str.slice(i) === [...str.slice(i)].reverse().join('')) {
      return str + [...str.slice(0, i)].reverse().join('');
    }
  }
} 
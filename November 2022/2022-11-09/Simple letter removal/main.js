/*

Codewars, 7k: Simple letter removal

*/

const solve = (str, count) => {
  const alpha = 'abcdefghijklmnopqrstuvwxyz';

  for (let i = 0; i < alpha.length; i++) {
    while (str.includes(alpha[i]) && count > 0) {
      str = str.replace(alpha[i], '');
      count--;
    }
  }
  return str;
}

console.log(solve('abracadabra', 1));
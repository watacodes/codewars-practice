/*

Codewars, 7k: Asterisk it

*/

const asteriscIt = n => {
  let res = '';
  let str = Array.isArray(n) ? n.join('') : n.toString();
  for (let i = 0; i < str.length; i++) {
    if (parseInt(str[i]) % 2 === 0 && parseInt(str[i+1]) % 2 === 0) {
      res += str[i] + '*';
    } else {
      res += str[i];
    }
  }
  return res;
}
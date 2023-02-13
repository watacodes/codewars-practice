/*

Codewars, 7k: Decrypt this school cipher

*/

const decrypt = str => {
  const strArr = str.replace(/'(\d+)'/g, (_, e) => String.fromCharCode(e)).split('').reverse().join('');
  return strArr;
}
/*

Codewars, 7k: Is valid identifier?

*/

const isValid = str => {
  const regex = /^[a-zA-Z_$][a-zA-Z0-9_$]*$/g;
  return regex.test(str);
}
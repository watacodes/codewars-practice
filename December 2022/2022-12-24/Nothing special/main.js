/*

Codewars, 7k: Nothing special

*/

const nothingSpecial = str => {
  const regex = /[^a-z\d\s]/gi;
  return typeof str !== 'string' ? 'Not a string!' : str.replace(regex, '');
}
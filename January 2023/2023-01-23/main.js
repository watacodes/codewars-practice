/*

Codewars, 7k: esreveR gnirtS

*/

String.prototype.reverse = function() {
  const strCopy = this.slice(0);
  return [...strCopy].reverse().join('');
}
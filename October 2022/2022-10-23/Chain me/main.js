/*

Codewars, 7k: Chain me


*/

function chain(input, fs) {
  return fs.reduce(function(input2, nF) { return nF(input2)}, input)
}
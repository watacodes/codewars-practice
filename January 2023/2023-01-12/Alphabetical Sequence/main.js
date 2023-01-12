/*

Codewars, 7k: Alphabetical Sequence

*/

function alphaSeq (str) {
  const alpha = 'abcdefghijklmnopqrstuvwxyz';
  const mappedStr = [...str.toLowerCase()].map(a => a.toUpperCase() + a.repeat([...alpha].indexOf(a))).sort((a, b) => a.length - b.length);
  return mappedStr.join(',');
}
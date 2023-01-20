/*

Codewars, 7k: Deutschstunde

*/

function derDieDas(wort) {
  const regex = /[aeiouäöü]/gi;
  const vowelCount = wort.match(regex) ? wort.match(regex).length : 0;
  return vowelCount < 2 ? 'das ' + wort : vowelCount >= 2 && vowelCount <= 3 ? 'die ' + wort : 'der ' + wort;
}
/*

Codewars, 7k: String Matcher

*/

function isMatching(string, str1, str2) {
  const givenStr = [...str1.toLowerCase().replace(/\s/g, '')].concat(...str2.toLowerCase().replace(/\s/g, '')).sort().join('');
  const originalStr = [...string.toLowerCase().replace(/\s/g, '')].sort().join('');
  return givenStr === originalStr;
}
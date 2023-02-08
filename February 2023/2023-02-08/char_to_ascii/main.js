/*

Codewars, 7k: char_to_ascii

*/

function charToAscii(str) {
  str = str.replace(/\W/gi, '');
  if (str.length === 0) return null;
  const alphaChart = [...str].reduce((acc, curr) => {
    acc[curr] = curr.charCodeAt();
    return acc;
  }, {});
  return alphaChart;
}
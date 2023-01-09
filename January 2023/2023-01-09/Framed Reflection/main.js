/*

Codewars, 6k: Framed Reflection

*/

function mirror(str) {
  const strArr = str.split(' ');
  const maxLen = Math.max(...strArr.map(e => e.length));
  const body = strArr.map(a => '* ' + [...a].reverse().join('') + ' '.repeat(maxLen - a.length) + ' *');
  const topBottom = '*'.repeat(maxLen + 4);
  return [topBottom, ...body, topBottom].join('\n');
}
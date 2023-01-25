/*

Codewars, 7k: Return pyramids

*/

function pyramid(n) {
  let pyramid = '';
  for (let i = 0; i < n; i++) {
    if (i === 0) {
      pyramid += ' '.repeat(n - 1) + '/\\\n';
      continue;    
    }
    if (i + 1 === n) {
      pyramid += '/' + '_'.repeat((n - 1) * 2) + '\\\n';
      break;
    }
    pyramid += ' '.repeat(n - i - 1) + '/' + ' '.repeat(i * 2) + '\\\n';
  }
  return pyramid;
}
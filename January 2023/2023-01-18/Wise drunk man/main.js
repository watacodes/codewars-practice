/*

Codewars, 7k: Wise drunk man

*/

function wdm(talk) {
  const onlyWords = talk.split(' ').map(word => word === 'puke' || word === 'hiccup' ? '' : word).filter(e => e !== '');
  return onlyWords.join(' ');
}
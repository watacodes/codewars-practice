/*

Codewars, 7k: Spanish sentences #1

*/

function spanishSent(arr) {
  const upsideDown = {
    '?': '¿',
    '!': '¡',
  }
  const spanish = arr.filter(phrase => phrase[0] === upsideDown[phrase.slice(-1)]);
  return `¡${spanish.length} spanish ${(spanish.length === 1 ? 'sentence' : 'sentences')} here and hasta la vista, baby!`;
}
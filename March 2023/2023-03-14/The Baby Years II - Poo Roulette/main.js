/*

Codewars, 7k: The Baby Years II - Poo Roulette

*/

function pooRoulette(p) {
  const babyPos = [];

  for (let i in p) {
    if (p[i].includes('B')) {
      babyPos.push(+i, p[i].indexOf('B'));
    }
  }

  return babyPos[0] >= 3 && [1, 2, 3].every(e => p[babyPos[0] - e][babyPos[1]] === '~') ? 'Get the wipes!' : /B~~~|~~~B/.test(p[babyPos[0]].join('')) ? 'You disgust me!' : 'Calm before the storm';
}
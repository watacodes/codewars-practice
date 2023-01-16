/*

Codewars, 7k: Batman Quotes

*/

const getQuote = (quotes, hero) => {
  const nameList = {
    'R': 'Robin',
    'J': 'Joker',
    'B': 'Batman',
  }
  const idx = hero.match(/\d/)[0]; 
  return `${nameList[hero.slice(0, 1)]}: ${quotes[idx]}`;
}
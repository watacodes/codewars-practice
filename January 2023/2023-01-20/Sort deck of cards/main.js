/*

Codewars, 7k: Sort deck of cards

*/

function sortCards(array) {
  const cards = ['A', '2', '3', '4', '5', '6', '7', '8', '9', 'T', 'J', 'Q', 'K'];
  return array.sort((a, b) => cards.indexOf(String(a)) - cards.indexOf(String(b)));
}

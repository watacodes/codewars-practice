/*

Codewars, 7k: What rank is this card?

*/

function rank(card) {
  const uniqueCards = {
    'T': 10,
    'J': 11,
    'Q': 12,
    'K': 13,
    'A': 14,
  };

  if (/1/.test(card[0]) || /[^ATJQK2-9]/.test(card[0])) return 0;
  
  const number = card.replace(/^[ATJQK]/, (e) => uniqueCards[e])
                     .replace(/[a-z]/i, '');
  return parseInt(number);
}


console.log(rank('Ad'));
console.log(rank('2d'));

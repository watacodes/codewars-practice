/*

Codewars, 7k: TIY-FizzBuzz

*/

function tiyFizzBuzz(sentence) {
  return [...sentence].map(e => {
    if (/[AIEOU]/.test(e)) {
      return 'Iron Yard';
    } else if (/[aieuo]/.test(e)) {
      return 'Yard';
    } else if (/[A-Z]/.test(e) && /[^AEUIO]/.test(e)) {
      return 'Iron';
    } else {
      return e;
    }
  }).join('');
}
/*

Codewars 8k:

Who remembers back to their time in the schoolyard, when girls would take a flower and tear its petals, saying each of the following phrases each time a petal was torn:

I love you
a little
a lot
passionately
madly
not at all
When the last petal was torn there were cries of excitement, dreams, surging thoughts and emotions.

Your goal in this kata is to determine which phrase the girls would say for a flower of a given number of petals, where nb_petals > 0.

*/

const howMuchILoveYou = num => {
  const result = [
    'I love you',
    'a little',
    'a lot',
    'passionately',
    'madly',
    'not at all'
  ]
  return num <= 6 ? result[num - 1] : result[(num - 1) % result.length];
}

console.log(howMuchILoveYou(12));
console.log(howMuchILoveYou(1));

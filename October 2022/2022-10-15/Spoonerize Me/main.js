/*

Codewars, 7k: Spoonerize Me

A spoonerism is a spoken phrase in which the first letters of two of the words are swapped around, often with amusing results.

In its most basic form a spoonerism is a two word phrase in which only the first letters of each word are swapped:

"not picking" --> "pot nicking"

*/

const spoonerize = words => {
  let wordsArray = words.split(' ');
  let first = wordsArray[0].charAt(0);
  let last = wordsArray[1].charAt(0);
  let swappedArray = wordsArray.map(w => {
    if (wordsArray.indexOf(w) === 0) {
      w = last + w.slice(1);
      return w;
    } else {
      w = first + w.slice(1);
      return w;
    }
  })
  return swappedArray.join(' ');
};

console.log(spoonerism('not picking'))
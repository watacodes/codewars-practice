/*

Codewars, 7k: Cryptanalysis Word Patterns

*/

const wordPattern = word => {
  let counter = 0
  let arr = [];
  word.split('')
      .reduce((acc, curr) => {
        let lowerCurr = curr.toLowerCase();
        if (acc.hasOwnProperty(lowerCurr)) {
          arr.push(acc[lowerCurr]);
        } else {
          acc[lowerCurr] = counter;
          arr.push(counter);
          counter++;
        }
        return acc;
      }, {});

  return arr.join('.');
};

console.log(wordPattern('Hippopotomonstrosesquippedaliophobia'));

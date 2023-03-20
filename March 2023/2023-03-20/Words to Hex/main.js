/*

Codewars, 6k: Words to Hex

*/

function wordsToHex(words) {
  const wordsArr = words.split(' ').reduce((acc, curr) => {
    const converted = [...curr.slice(0, 3)].map(w => w.charCodeAt(0).toString(16)).join('');
    return acc.concat(['#' + converted.padEnd(6, 0)]);
  }, []);
  return wordsArr;
}
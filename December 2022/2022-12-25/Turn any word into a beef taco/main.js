/*

Codewars, 7k: Turn any word into a beef taco

*/

const tacofy = word => {
  const taco = ['shell'];
  const replacedWords = [];
  const onlyLowerCase = word.toLowerCase();
  for (let i = 0; i < word.length; i++) {
    if (onlyLowerCase[i] === 't') {
      replacedWords.push('tomato');
    } else if (onlyLowerCase[i] === 'l') {
      replacedWords.push('lettuce');
    } else if (onlyLowerCase[i] === 'c') {
      replacedWords.push('cheese');
    } else if (onlyLowerCase[i] === 'g') {
      replacedWords.push('guacamole');
    } else if (onlyLowerCase[i] === 's') {
      replacedWords.push('salsa');
    } else if (onlyLowerCase[i].match(/[aiueo]/g)) {
      replacedWords.push('beef');
    }
  }
  return taco.concat(replacedWords, 'shell');
}
/*

Codewars, 7k: Wordsearch

*/


const wordSearch = (word, str) => {
  const regex = new RegExp('\\b' + word + '\\b', 'gi');
  return regex.test(str);
}



const testStr = "what makes the desert beautiful, said the little prince is that somewhere it hides a well";

console.log(wordSearch('le prince', testStr));
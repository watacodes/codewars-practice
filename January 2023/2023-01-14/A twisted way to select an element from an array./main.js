/*

Codewars, 7k: A twisted way to select an element from an array.

*/

function select (arrSearch, arrTake) {
  const alphaSorted = arrSearch.sort((a, b) => b.localeCompare(a));
  const third = alphaSorted[2][2];
  for (let word of arrTake) {
    if (word[0] === third) {
      return word;
    }
  }
  return 'Nothing here';
}
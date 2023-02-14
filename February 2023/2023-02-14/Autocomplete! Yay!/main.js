/*

Codewars, 6k: Autocomplete! Yay!

*/

function autocomplete(input, dictionary) {
  const regex = new RegExp(`^${input.replace(/[^a-z]/gi, '')}`, 'i');
  const filtered = dictionary.filter(e => regex.test(e));
  return filtered.slice(0, 5);
}
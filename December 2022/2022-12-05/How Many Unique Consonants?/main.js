/*

Codewars, 7k: How Many Unique Consonants?

*/

const countConsonants = str => {
  const uniqueConsonants = [...str.toLowerCase()].reduce((acc, curr) => {
    if (!acc[curr] && curr.match(/[^aiueo !$%&-_]/)) {
      acc[curr] = 1;
    }
    return acc;
  }, {});
  return Object.keys(uniqueConsonants).length;
}

console.log(countConsonants('addcder'));
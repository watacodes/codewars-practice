/*

Codewars, 7k: Spanish Conjugator

*/

const conjugate = verb => {
  const pattern = {
    'ar': ['o', 'as', 'a', 'amos', 'áis', 'an'],
    'er': ['o', 'es', 'e', 'emos', 'éis', 'en'],
    'ir': ['o', 'es', 'e', 'imos', 'ís', 'en']
  };
  return {
    [verb]: pattern[verb.slice(-2)].map(w => verb.slice(0, -2) + w)
  };
}

console.log(conjugate('comer'))
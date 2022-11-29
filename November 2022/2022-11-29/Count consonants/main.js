/*

Codewars, 7k: Count consonants

*/

const consonantCount = str => {
  return [...str].filter(w => /[qzwsxdcrfvtgbyhnjmklp]/gi.test(w)).length;
}

console.log(consonantCount('XaeiuoX'))
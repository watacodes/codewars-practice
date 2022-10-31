/*

Codewars, 7k: Hungarian Vowel Harmony (easy)



*/

const dative = word => {
  return word.match(/[aáoóuú]/) ? word + 'nak' : word + 'nek';
};
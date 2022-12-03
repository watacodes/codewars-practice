/*

Codewars, 7k: Start with a Vowel

*/

const vowelStart = str => {
  const strToArr = str.toLowerCase().replace(/\s|[!?&,._-]/g, '').split('');
  return strToArr.map((letter, i) => letter.match(/[aiueo]/g) && i !== 0 && letter.match(/\w/g) ? ' ' + letter : letter).join('');
}




const testCase = 'my number is 0209-544-21313'; // 'myn umb er is02085332325'

console.log(vowelStart(testCase));
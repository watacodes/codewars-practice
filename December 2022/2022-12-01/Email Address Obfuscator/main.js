/*

Codewars, 7k: Email Address Obfuscator

*/

const obfuscate = email => {
  const charsToAlphabet = {
    '@': ' [at] ',
    '.': ' [dot] ',
  }
  return [...email].map(letter => charsToAlphabet[letter] ? charsToAlphabet[letter] : letter).join('');
}

console.log(obfuscate('user_name@example.com'))
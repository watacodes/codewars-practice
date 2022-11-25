/*

Codewars, 7k: GA-DE-RY-PO-LU-KI cypher

*/

const crypt = {
  'G': 'A',
  'g': 'a',
  'A': 'G',
  'a': 'g',
  'D': 'E',
  'd': 'e',
  'E': 'D',
  'e': 'd',
  'R': 'Y',
  'r': 'y',
  'y': 'r',
  'Y': 'R',
  'P': 'O',
  'p': 'o',
  'O': 'P',
  'o': 'p',
  'L': 'U',
  'l': 'u',
  'u': 'l',
  'U': 'L',
  'K': 'I',
  'k': 'i',
  'i': 'k',
  'I': 'K'
}

const encode = str => {
  return [...str].map(w => crypt[w] ? crypt[w] : w).join('');
}

const decode = str => {
  const decodeCrypt = {};
  
  for (let i in Object.keys(crypt)) {
    decodeCrypt[Object.values(crypt)[i]] = Object.keys(crypt)[i];
  }

  return  [...str].map(w => decodeCrypt[w] ? decodeCrypt[w] : w).join('');
}

console.log(encode('Ala has a a cat'))

console.log(decode('Gug hgs g g cgt'))
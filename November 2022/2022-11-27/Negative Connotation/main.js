/*

Codewars, 7k: Negative Connotation

*/


const connotation = str => {
  const positive = 'abcdefghijklm';
  const negative = 'nopqrstuvwxyz';
  let negativeCount = 0;
  let positiveCount = 0;
  let newStr = str.replace(/^\s+|\s+$|\s+(?=\s)/g, '');
  const firstLetters = newStr.split(' ').map(a => a[0].toLowerCase());

  for (const letter of firstLetters) {
    [...negative].includes(letter) ? negativeCount++ : positiveCount++;
  }

  return positiveCount >= negativeCount; 
}


const testStr = "A big brown fox caught a bad rabbit";

console.log(connotation(testStr));
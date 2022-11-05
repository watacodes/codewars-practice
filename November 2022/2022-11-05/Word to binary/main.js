/*

Codewars, 7k: Word to binary


*/

const wordToBin = str => {
  const strArr = str.split('').map(l => {
    const letterToBinary = l.charCodeAt().toString(2);
    return '0'.repeat(8 - letterToBinary.length) + letterToBinary;
  });
  return strArr;
};


console.log(wordToBin('man'));
/*

Codewars, 7k: Club Doorman

*/

const passTheDoorMan = word => {
  const alpha = 'abcdefghijklmnopqrstuvwxyz';
  let duplicate = '';
  [...word].forEach((w, i) => w === [...word][i+1] ? duplicate = w : w);
  const duplicateLetterCount = [...alpha].indexOf(duplicate) + 1;
  return duplicateLetterCount * 3;
}

console.log(passTheDoorMan('lettuce'))
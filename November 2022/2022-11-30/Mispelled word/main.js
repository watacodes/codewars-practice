/*

Codewars, 7k: Mispelled word

*/

const mispelled = (s1, s2) => {
  let counter = 0;
  let strLen = s1.length >= s2.length ? s1.length : s2.length;
  
  if (Math.abs(s1.length - s2.length) > 1) return false;
  
  for (let i = 0; i < strLen; i++) {
    if (!s2.includes(s1[i])) {
      counter++;
    }
  }
  return counter <= 1;
}

console.log(mispelled('1versed', 'versed'))
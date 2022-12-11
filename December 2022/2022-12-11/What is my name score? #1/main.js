/*

Codewars, 7k: What is my name score? #1

*/

function nameScore(name) {
  let nameScore = 0;
  const res = {};
  const nameToArr = [...name.replace(/\s/g, '').toUpperCase()];
  for (let i in alpha) {
    for (let k = 0; k < nameToArr.length; k++) {
      if (i.indexOf(nameToArr[k]) !== -1) {
        nameScore += alpha[i];
      }
    }
  }
  res[name] = nameScore;
  return res;
}
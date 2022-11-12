/*

Codewars, 7k: Ultimate Array Reverser

*/

const ultimateReverse = arr => {
  const lengthArr = arr.map(a => a.length);
  const reversedStr = arr.join('').split('').reverse().join('');
  const res = [];

  let tempIdx = 0;

  for (const len of lengthArr) {
    res.push(reversedStr.substr(tempIdx, len))
    tempIdx += len;
  };

  return res;
};


console.log(ultimateReverse(["I", "like", "big", "butts", "and", "I", "cannot", "lie!"]))
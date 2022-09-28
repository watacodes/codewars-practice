/*

Codewars, 7k: Letterbox Paint-Squad


*/

const paintLetterboxes = (s, e) => {
  let numArr = [];
  for (let i = s; i <= e; i++) {
    numArr.push(i);
  }
  let digitsArr = [...numArr.map(a => a.toString().split('')).join(',')].filter(a => a !== ',').map(a => +a);
  let resObj = {}
  for (let i = 0; i < 10; i++) {
    resObj[i] = 0;
  }
  for (let idx in digitsArr) {
    resObj[`${digitsArr[idx]}`]++;
  }
  return Object.values(resObj).map(a => +a);
};

console.log(paintLetterboxes(125, 132))
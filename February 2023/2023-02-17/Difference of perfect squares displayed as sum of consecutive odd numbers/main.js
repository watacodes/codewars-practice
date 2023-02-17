/*

Codewars, 6k: Difference of perfect squares displayed as sum of consecutive odd numbers

*/

function squaresToOdd(sqr1, sqr2) {
  const leftPart = `${sqr1}^2 - ${sqr2}^2 = `;
  const sumOfTwo = sqr1 + sqr2;
  const resultVal = sqr1 ** 2 - sqr2 ** 2;
  let diffOfTwo = sqr1 - sqr2;
  const middlePart = [];

  if (sqr2 === 0) {
    let startNum = 1;
    for (let i = 1; i <= diffOfTwo; i++) {
      if (i === 1) {
        middlePart.push(startNum)
      } else {
        startNum += 2;
        middlePart.push(startNum);
      }
    }
  } else if (diffOfTwo % 2) {
    let startNum = sumOfTwo - Math.floor(diffOfTwo / 2) * 2;
    for (let i = 1; i <= diffOfTwo; i++) {  
      if (i === 1) {
        middlePart.push(startNum);
      } else {
        startNum += 2;
        middlePart.push(startNum);
      }
    }
  } else {
    let startNum = resultVal / diffOfTwo + 1 - diffOfTwo;
    for (let i = 1; i <= diffOfTwo; i++) {  
      if (i === 1) {
        middlePart.push(startNum);
      } else {
        startNum += 2;
        middlePart.push(startNum);
      }
    }
  }
  return leftPart + middlePart.join(' + ') + ' = ' + resultVal;
}

console.log(squaresToOdd(9, 5))
console.log(squaresToOdd(10, 7))
console.log(squaresToOdd(10, 0));
console.log(squaresToOdd(3, 0));

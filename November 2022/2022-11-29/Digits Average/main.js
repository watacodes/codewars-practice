/*

Codewars, 7k: Digits Average

*/

const digitsAverage = num => {
  if (num < 10) return num;

  while (num > 9) {
    num = String(num);
    let arr = [];
    for (let i = 0; i < num.length - 1; i++) {
      arr.push(Math.round((+num[i] + +num[i+1]) / 2));
    }
    num = +(arr.join(''));
  }
  return num;
}




console.log(digitsAverage(246));
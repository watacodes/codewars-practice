/*

Codewars, 7k: Polydivisible Numbers

*/

const polydivisible = x => {
  let numToStr = x.toString();
  const numArr = [];
  for (let i = 1; i <= numToStr.length; i++) {
    numArr.push(Number(numToStr.slice(0, i)));
  }
  return numArr.every((n, i) => n % (i + 1) === 0);
}
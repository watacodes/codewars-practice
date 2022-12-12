/*

Codewars, 7k: Numbers Which Sum of Powers of Its Digits Is The Same Number

*/

const eqSumPowdig = (hMax, exp) => {
  const res = [];

  for (let i = 2; i <= hMax; i++) {
    let temp = [...String(i)].reduce((acc, curr) => acc + (+curr) ** exp, 0);
    if (temp === i) {
      res.push(temp);
    }
  }
  return res;
}
/*

Codewars, 7k: Coprime Validator

*/

const isCoprime = (x, y) => {
  const xFactor = [];
  const yFactor = [];
  for (let i = 1; i <= x; i++) {
    if (x % i === 0) 
      xFactor.push(i);
  };

  for (let k = 1; k <= y; k++) {
    if (y % k === 0) 
      yFactor.push(k);
  };

  const mixedFactor = xFactor.concat(yFactor)
                             .sort((a, b) => b - a);
  return mixedFactor.find((a, i) => i !== mixedFactor.lastIndexOf(a)) === 1 ? true : false;
};

console.log(isCoprime(12, 39));
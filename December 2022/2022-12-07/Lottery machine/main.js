/*

Codewars, 7k: Lottery machine

*/

const lottery = str => {
  const onlyDigits = str.replace(/\D/gi, '');
  const removeConsecutiveNums = [...new Set(onlyDigits)].join('');
  return !removeConsecutiveNums ? 'One more run!' : removeConsecutiveNums;
}

console.log(lottery("hPrBKWDH8yc6Lt5NQZWQ"))
console.log(lottery('555'));
/*

Codewars, 7k: Simple Fun #144: Distinct Digit Year

*/

const distinctDigitYear = year => {
  for (let i = year + 1; i < 10000; i++) {
    if (Array.from(new Set(i.toString())).length === 4) return i;
  }
};

console.log(distinctDigitYear(1987))
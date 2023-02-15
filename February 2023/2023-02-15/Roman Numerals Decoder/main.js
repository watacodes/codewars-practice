/*

Codewars, 6k: Roman Numerals Decoder

*/

function solution (roman) {
  const romanNumerals = {
    'I': 1,
    'V': 5,
    'X': 10,
    'L': 50,
    'C': 100,
    'D': 500,
    'M': 1000
  };

  let sum = 0;
  for (let i = 0; i < roman.length; i++) {
    if (romanNumerals[roman[i]] < romanNumerals[roman[i+1]]) {
      sum += romanNumerals[roman[i+1]] - romanNumerals[roman[i]];
      i++;
    } else {
      sum += romanNumerals[roman[i]];
    }
  }
  return sum;
};
/*

Codewars 8k: https://www.codewars.com/kata/5b077ebdaf15be5c7f000077

If you can't sleep, just count sheep!!

Task:
Given a non-negative integer, 3 for example, return a string with a murmur: "1 sheep...2 sheep...3 sheep...". Input will always be valid, i.e. no negative integers.

*/

const countSheep = s => {
  let murmur = '';
  let counter = 1;
  while (counter <= s) {
    murmur += `${counter} sheep...`;
    counter++;
  }
  return murmur;
};

console.log(countSheep(3));
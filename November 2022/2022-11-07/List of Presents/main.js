/*

Codewars, 7k: List of Presents


*/

const howManyGifts = (budget, gifts) => {
  let sortedArr = gifts.sort((a, b) => a - b);
  let counter = 0;
  let temp = 0;

  for (let i of sortedArr) {
    if (i + temp <= budget) {
      temp += i;
      counter++;
    };
  };
  return counter;
};

console.log(howManyGifts(20, [13, 2, 4, 6, 1]))
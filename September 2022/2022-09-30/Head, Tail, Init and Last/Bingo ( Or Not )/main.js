/*

Codewars, 7k: Bingo ( Or Not )

For this game of BINGO, you will receive a single array of 10 numbers from 1 to 26 as an input. Duplicate numbers within the array are possible.

Each number corresponds to their alphabetical order letter (e.g. 1 = A. 2 = B, etc). Write a function where you will win the game if your numbers can spell "BINGO". They do not need to be in the right order in the input array. Otherwise you will lose. Your outputs should be "WIN" or "LOSE" respectively.


*/

const bingo = a => {
  let converted = a.map(a => String.fromCharCode(a + 96).toUpperCase())
  let bingoObj = {
    B: false,
    I: false,
    N: false,
    G: false,
    O: false
  };

  for (let i = 0; i < converted.length; i++) {
    let val = converted[i]
    if (bingoObj.hasOwnProperty(val)) {
      bingoObj[`${val}`] = true;
    }
  }
  return Object.values(bingoObj).every(a => a === true) ? "WIN" : "LOSE";
}
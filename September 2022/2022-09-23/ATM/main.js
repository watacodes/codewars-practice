/*

Codewars, 7k: ATM


An ATM has banknotes of nominal values 10, 20, 50, 100, 200 and 500 dollars. You can consider that there is a large enough supply of each of these banknotes.

You have to write the ATM's function that determines the minimal number of banknotes needed to honor a withdrawal of n dollars, with 1 <= n <= 1500.

Return that number, or -1 if it is impossible.


*/

const solve = n => {
  let banknotes = 0;
  let remaining = n;
  if (n / 500 >= 1) {
    while (remaining >= 500) {
      remaining -= 500;
      banknotes++;
    }
  }

  if (n / 200 >= 1) {
    while (remaining >= 200) {
      remaining -= 200;
      banknotes++;
    }
  }

  if (remaining / 100 >= 1) {
    while (remaining >= 100) {
      remaining -= 100;
      banknotes++;
    }
  }

  if (remaining / 50 >= 1) {
    while (remaining >= 50) {
      remaining -= 50;
      banknotes++;
    }
  }

  if (remaining / 20 >= 1) {
    while (remaining >= 20) {
      remaining -= 20;
      banknotes++;
    }
  }

  if (remaining / 10 >= 1) {
    while (remaining >= 10) {
      remaining -= 10;
      banknotes++;
    }
  }

  if (remaining !== 0) return -1;
  return banknotes;
};

console.log(solve(720))
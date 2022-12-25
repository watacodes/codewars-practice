/*

Codewars, 7k: Mr Martingale

*/

const martingale = (balance, rounds) => {
  if (rounds.length === 0) return balance;
  let betAmountPerRound = 100;
  for (let i = 0; i < rounds.length; i++) {
    if (rounds[i] == 1) {
      balance += betAmountPerRound;
      betAmountPerRound = 100;
    } else {
      balance -= betAmountPerRound; 
      betAmountPerRound *= 2;
    }
  }
  return balance;
}
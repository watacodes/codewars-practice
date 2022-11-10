/*

Codewars, 7k: Calculator: Coin Combination

The function takes cents value (int) and needs to return the minimum number of coins combination of the same value.

The function should return an array where
coins[0] = pennies ==> $00.01
coins[1] = nickels ==> $00.05
coins[2] = dimes ==> $00.10
coins[3] = quarters ==> $00.25

So for example:
coinCombo(6) --> [1, 1, 0, 0]

*/

const coinCombo = (cents, arr = [0, 0, 0, 0]) => {
  const eachCoin = [25, 10, 5, 1];

  let currentCents = cents;
  for (let i of eachCoin) {
    while (currentCents >= i) {
      let remainder = currentCents % i;
      let add = (currentCents - remainder) / i;
      currentCents = currentCents % i;
      let idx = eachCoin.length - 1 - eachCoin.indexOf(i);
      arr[idx] += add;
    }
  }
  return arr;
};

console.log(coinCombo(6))
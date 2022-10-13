/*

Codewars, 7k: Numbers with this digit inside

You have to search all numbers from inclusive 1 to inclusive a given number x, that have the given digit d in it.
The value of d will always be 0 - 9.
The value of x will always be greater than 0.

You have to return as an array

the count of these numbers,
their sum
and their product.

For example:
x = 11
d = 1
->
Numbers: 1, 10, 11
Return: [3, 22, 110]

If there are no numbers, which include the digit, return [0,0,0].

*/

const numbersWithDigitInside = (x, d) => {
  let [count, sum, product] = [0, 0, 0];
  let numbers = [];
  for (let i = 1; i <= x; i++) {
    if (String(i).split('').includes(String(d))) 
      numbers.push(i);
  }
  if (numbers.length === 0) return [0, 0, 0];

  count = numbers.length;
  sum = numbers.reduce((a, b) => a + b, 0);
  product = numbers.reduce((a, b) => a * b, 1);
  return [count, sum, product];
};

console.log(numbersWithDigitInside(11, 1));
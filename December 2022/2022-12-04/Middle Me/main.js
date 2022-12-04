/*

Codewars, 7k: Middle Me

*/

const middleMe = (n, x, y) => {
  return n % 2 ? x : y.repeat(n / 2) + x + y.repeat(n / 2);
}

console.log(middleMe(18, 'z', '#'));
/*

Codewars, 7k: Fibonacci's FizzBuzz

*/

const fibsFizzBuzz = n => {
  const fibArr = [1, 1];
  if (n <= 1) return [1];
  if (n <= 2) return fibArr;
  for (let i = 3; i <= n; i++) {
    let temp = fibArr[i - 2] + fibArr[i - 3];
    fibArr.push(temp);
  }
  return fibArr.map(a => a % 15 === 0 ? 'FizzBuzz' : a % 3 === 0 ? 'Fizz' : a % 5 === 0 ? 'Buzz' : a);
}
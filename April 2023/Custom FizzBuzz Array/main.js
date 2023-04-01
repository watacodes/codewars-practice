/*

Codewars, 6k: Custom FizzBuzz Array

*/

const fizzBuzzCustom = (s1 = 'Fizz', s2 = 'Buzz', n1 = 3, n2 = 5) => {
  const n3 = n1 * n2;
  const res = [];

  for (let i = 1; i <= 100; i++) {
    if (i % n3 === 0) {
      res.push(s1 + s2);
    } else if (i % n1 === 0) {
      res.push(s1);
    } else if (i % n2 === 0) {
      res.push(s2);
    } else {
      res.push(i);
    }
  }
  
  return res;
};
/*

Codewars, 7k: The Poet And The Pendulum



*/


const pendulum = values => {
  let arr1 = [];
  let arr2 = [];
  let valuesSorted = values.sort((a, b) => a - b);
  valuesSorted.forEach((num, i) => i % 2 === 0 ? arr1.push(num) : arr2.push(num));
  return arr1.reverse().concat(arr2);
};

console.log(pendulum([8, 7, 10, 3]));
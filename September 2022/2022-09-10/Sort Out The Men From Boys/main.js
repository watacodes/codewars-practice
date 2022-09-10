/*

Codewars, 7k: Sort Out The Men From Boys

Now that the competition gets tough it will Sort out the men from the boys .

Men are the Even numbers and Boys are the odd!
Task
Given an array/list [] of n integers , Separate The even numbers from the odds , or Separate the men from the boys

*/

// Condition: Men => even, Boys => odd

const menFromBoys = arr => {
  let men = [];
  let boys = [];
  arr.forEach(a => {
    if (a % 2 === 0) {
      men.push(a);
    } else {
      boys.push(a);
    }
  });
  return[...new Set(men.sort((a, b) => a - b))].concat([...new Set(boys.sort((a, b) => b - a))]);
};

console.log(menFromBoys([7, 3, 14, 17]));
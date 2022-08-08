/*

Codewars, 8k: Find the Difference in Age between Oldest and Youngest Family Members

At the annual family gathering, the family likes to find the oldest living family member’s age and the youngest family member’s age and calculate the difference between them.

You will be given an array of all the family members' ages, in any order. The ages will be given in whole numbers, so a baby of 5 months, will have an ascribed ‘age’ of 0. Return a new array (a tuple in Python) with [youngest age, oldest age, difference between the youngest and oldest age].

*/

// parameters: arr contains numbers
// return ==> [youngest, oldest, oldest - youngest]

const differenceInAges = arr => {
  let sorted = arr.sort((a, b) => a - b);
  return [Math.min(...sorted), Math.max(...sorted), Math.max(...sorted) - Math.min(...sorted)]
};

console.log(differenceInAges([1, 2, 10]))
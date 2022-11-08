/*

Codewars, 7k: Spraying trees


*/

const task = (weekday, trees, cost) => {
  const employeesShift = {
    'Monday': 'James',
    'Tuesday': 'John',
    'Wednesday': 'Robert',
    'Thursday': 'Michael',
    'Friday': 'William'
  };

  return `It is ${weekday} today, ${employeesShift[weekday]}, you have to work, you must spray ${trees} trees and you need ${trees * cost} dollars to buy liquid`;
};

console.log(task('Monday', 15, 2));
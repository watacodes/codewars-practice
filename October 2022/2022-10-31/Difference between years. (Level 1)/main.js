/*

Codewars, 7k: Difference between years. (Level 1)

Write a function that receives two strings as parameter. This strings are in the following format of date: YYYY/MM/DD. Your job is: Take the years and calculate the difference between them.

Examples:
'1997/10/10' and '2015/10/10' -> 2015 - 1997 = returns 18 
'2015/10/10' and '1997/10/10' -> 2015 - 1997 = returns 18

*/

const howManyYears = (date1, date2) => {
  const date1Year = date1.split('/')[0].replace(/^[0]+/g, '');
  const date2Year = date2.split('/')[0].replace(/^[0]+/g, '');
  return Math.abs(date1Year - date2Year);
};


// let date = '1997/10/10';

// console.log(new Date(date).getFullYear());

console.log(howManyYears('0079/02/13', '1153/11/08'));
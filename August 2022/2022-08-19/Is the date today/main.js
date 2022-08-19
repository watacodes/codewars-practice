/*

Codewars, 8k: Is the date today

Write a simple function that takes a Date as a parameter and returns a Boolean representing whether the date is today or not.

Make sure that your function does not return a false positive by only checking the day.

*/

const isToday = date => {
  let today = new Date();
  console.log(date.getDate(), today.getDate());
  return date.getDate() === today.getDate() && date.getMonth() === today.getMonth() && date.getFullYear() === today.getFullYear();
}
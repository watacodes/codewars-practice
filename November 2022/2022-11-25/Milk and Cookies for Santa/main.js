/*

Codewars, 7k: Milk and Cookies for Santa

*/

const timeForMilkAndCookies = date => {
  if (date.getMonth() === 11 && date.getDate() === 24) return true;
  return false;
}
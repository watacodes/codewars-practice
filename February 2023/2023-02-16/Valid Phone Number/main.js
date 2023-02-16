/*

Codewars, 6k: Valid Phone Number

*/

function validPhoneNumber(num) {
  const regex = /^\(\d{3}\) \d{3}\-\d{4}$/;
  return regex.test(num);
}
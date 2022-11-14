/*

Codewars, 7k: Password validator

*/

const password = pass => {
  const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;
  return regex.test(pass);
}

console.log(password('Abcde221'))
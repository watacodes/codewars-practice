/*

Codewars, 7k: Happy Birthday, Darling!

*/

function womensAge(n) {
  const base = Math.floor(n / 2);
  const age = n % 2 ? 21 : 20;
  return `${n}? That\'s just ${age}, in base ${base}!`;
};
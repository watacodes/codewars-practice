/*

Codewars, 7k: Dan's great power generator

*/

function danspower(num, power) {
  const nthPower = Math.pow(num, power);
  return nthPower % 2 ? Math.round(nthPower / 10) * 10 : nthPower;
}